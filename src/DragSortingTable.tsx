import React, { useState, useCallback, useRef } from "react";
import { Table, Form, Input, InputNumber, DatePicker, Checkbox } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MenuOutlined } from "@ant-design/icons";
import update from "immutability-helper";
import data from "./data";

const type = "DragableBodyRow";
const { TextArea } = Input;

interface RowProps {
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
}

type MyRowProps = RowProps & React.HTMLAttributes<HTMLElement>;

const DragableBodyRow = ({
  index,
  moveRow,
  className,
  style,
  ...restProps
}: MyRowProps) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      //@ts-ignore
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? " drop-over-downward" : " drop-over-upward",
      };
    },
    drop: (item: any) => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (
    <tr
      //@ts-ignore
      ref={ref}
      className={`${className}${isOver ? dropClassName : ""}`}
      style={{ cursor: "move", ...style }}
      {...restProps}
    />
  );
};

const DragHandle = () => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
);

const columns = [
  {
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Required",
    dataIndex: "required",
    key: "required",

    render: (required: boolean) => <>{required ? "Yes" : "No"}</>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

const DragSortingTable: React.FC = () => {
  const [daataa, setData] = useState(data);

  const components = {
    body: {
      row: DragableBodyRow,
    },
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = daataa[dragIndex];
      setData(
        update(daataa, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        })
      );
    },
    [daataa]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        columns={columns}
        dataSource={daataa}
        components={components}
        onRow={(record, index) =>
          ({
            index,
            moveRow,
          } as MyRowProps)
        }
      />
    </DndProvider>
  );
};

export default DragSortingTable;
