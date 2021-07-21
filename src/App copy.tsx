import * as React from "react";
import {
  Checkbox,
  Input,
  InputNumber,
  Switch,
  DatePicker,
  TimePicker,
  Radio,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  Select,
  AutoComplete,
  Rate,
  Slider,
  Cascader,
  TreeSelect,
  Transfer,
  Form,
  Mentions,
} from "formik-antd";
import { Formik } from "formik";
import { Button, TreeSelect as $TreeSelect, Upload, message } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { generateSamplePassword, handleSubmit, handleValidate } from "./utils";
import { InboxOutlined } from "@ant-design/icons";
const { TreeNode } = $TreeSelect;
const { Dragger } = Upload;

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

export default function App() {
  return (
    <Formik
      initialValues={{
        claimNumber: "",
        //set default/initial values via formik
        coverage: "",
        notes: "",
        producer: "",
        date: new Date().toISOString(),
        dateReceived: new Date().toISOString(),
        yearOfACcount: new Date().toISOString(),
        llrNumber: "",
        pointOfEntry: "",
        lossLocation: "",
        distanceByCrow: 0,
        distanceByRoad: 0,
        maxMilesAllowed: 0,
        ROIncurredonFNOL: 0,
        insured: false,
      }}
      onSubmit={handleSubmit}
      validate={(values) => {
        if (!values.claimNumber) {
          return { claimNumber: "required" };
        }
        return undefined;
      }}
      render={(formik) => (
        <Form>
          <div className="container">
            <div className="component-container">
              <Form.Item
                name="claimNumber"
                label="Claim Number"
                hasFeedback={true}
                showValidateSuccess={true}
                rules={[{ required: true }]}
              >
                <Input name="claimNumber" placeholder="Claim Number" />
              </Form.Item>
              <Form.Item
                name="coverage"
                label="Coverage"
                rules={[{ required: true }]}
              >
                <Input name="coverage" placeholder="Coverage" />
              </Form.Item>
              <Form.Item name="notes" label="Notes">
                <Input name="notes" placeholder="Claim Notes" />
              </Form.Item>
              <Form.Item name="producer" label="Producer">
                <Input name="producer" placeholder="Producer" />
              </Form.Item>
              <Form.Item name="date" label="Date">
                <DatePicker name="date" format="MM/DD/YYYY" />
              </Form.Item>
              <Form.Item name="dateReceived" label="Date Received">
                <DatePicker name="dateReceived" format="MM/DD/YYYY" />
              </Form.Item>
              <Form.Item name="yearOfAccount" label="Year of Account">
                <DatePicker name="yearOfAccount" picker="year" />
              </Form.Item>
              <Form.Item name="llrNumber" label="LLR Number">
                <Input name="llrNumber" />
              </Form.Item>
              <Form.Item name="pointOfEntry" label="Point of Entry">
                <Input name="pointOfEntry" />
              </Form.Item>
              <Form.Item name="lossLocation" label="Loss Location">
                <Input name="lossLocation" />
              </Form.Item>
              <Form.Item name="distanceByCrow" label="Distance By Crow">
                <InputNumber name="distanceByCrow" min={0} />
              </Form.Item>
              <Form.Item name="distanceByRoad" label="Distance By Road">
                <InputNumber name="distanceByRoad" min={0} />
              </Form.Item>
              <Form.Item name="maxMilesAllowed" label="Max Miles Allowed">
                <InputNumber name="maxMilesAllowed" min={0} />
              </Form.Item>
              <Form.Item name="ROIncurredonFNOL" label="RO Incurred on FNOL">
                <InputNumber
                  name="ROIncurredonFNOL"
                  formatter={(value) => `$ ${value}`}
                />
              </Form.Item>
              <Form.Item name="insured" label="Insured">
                <Checkbox name="insured" />
              </Form.Item>
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
              <Button.Group size="large">
                <ResetButton>Reset</ResetButton>
                <SubmitButton type="primary" disabled={false}>
                  Submit
                </SubmitButton>
              </Button.Group>
            </div>
            <FormikDebug style={{ maxWidth: 400 }} />
          </div>
        </Form>
      )}
    />
  );
}
