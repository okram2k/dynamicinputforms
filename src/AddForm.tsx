import {
  Form,
  Input,
  Checkbox,
  Select,
  InputNumber,
  FormikDebug,
  ResetButton,
  SubmitButton,
} from "formik-antd";
import { Formik, FormikProvider } from "formik";
import { Button } from "antd";
import { handleSubmit } from "./utils";
const { Option } = Select;

const initialValues = {
  description: "",
  type: "text",
  required: false,
};

type Props = {
  submitForm: any;
};

const AddForm: React.FC<Props> = (submitForm) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={(formik) => (
          <Form>
            <div className="container">
              <div className="component-container">
                <Form.Item
                  name="description"
                  label="description"
                  rules={[{ required: true }]}
                >
                  <Input name="description" required={true} />
                </Form.Item>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true }]}
                >
                  <Select name="type" defaultValue="text">
                    <Option value="text">Text</Option>
                    <Option value="number">Number</Option>
                    <Option value="date">Date</Option>
                    <Option value="year">Year</Option>
                    <Option value="checkbox">Checkbox</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="required"
                  label="Required?"
                  rules={[{ required: false }]}
                >
                  <Checkbox name="required" />
                </Form.Item>
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
    </>
  );
};

export default AddForm;
