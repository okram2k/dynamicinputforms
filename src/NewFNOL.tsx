import { useState } from "react";
import {
  Checkbox,
  Input,
  InputNumber,
  DatePicker,
  FormikDebug,
  ResetButton,
  SubmitButton,
  Form,
} from "formik-antd";
import { Formik, FormikProvider } from "formik";
import { Button, Upload, message, List, Typography, Space } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { handleSubmit } from "./utils";
import { InboxOutlined } from "@ant-design/icons";
import FormGen from "./FormGen";
import AddForm from "./AddForm";
import data from "./data";
const { Dragger } = Upload;
const { Title } = Typography;
let renderCount = 0;

//console.log(data);

let initialValues: any = {};

//console.log(initialValues);

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info: any) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export default function NewFNOL() {
  const [workingData, setWorkingData] = useState(data);

  renderCount++;

  workingData.forEach((item) => {
    switch (item.type) {
      case "text":
        initialValues[item.name] = "";
        break;
      case "number":
        initialValues[item.name] = 0;
        break;
      case "date":
        initialValues[item.name] = new Date().toISOString();
        break;
      case "year":
        initialValues[item.name] = new Date().toISOString();
        break;
      case "checkbox":
        initialValues[item.name] = false;
        break;
      default:
        initialValues[item.name] = "";
    }
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => {
          if (!values.claimNumber) {
            return { claimNumber: "required" };
          }
          return undefined;
        }}
        render={(formik) => (
          <Form>
            <Title>New FNOL</Title>
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={workingData}
              renderItem={(formType) => (
                <List.Item>
                  <FormGen formType={formType} />
                </List.Item>
              )}
            />
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to attach to the claim.
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Dragger>
            <br />
            <Space>
              <ResetButton color="red">Reset</ResetButton>
              <SubmitButton type="primary" disabled={false}>
                Submit
              </SubmitButton>
            </Space>
          </Form>
        )}
      />
      <br />
    </>
  );
}
