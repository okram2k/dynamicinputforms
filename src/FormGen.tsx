import { Form, Input, Checkbox, DatePicker, InputNumber } from "formik-antd";

type Props = {
  formType: {
    id: number;
    name: string;
    label: string;
    required: boolean;
    type: string;
  };
};

const FormGen: React.FC<Props> = ({ formType }) => {
  return (
    <>
      <Form.Item
        name={formType.name}
        label={formType.label}
        rules={[{ required: formType.required }]}
      >
        {formType.type === "text" ? (
          <Input name={formType.name} />
        ) : formType.type === "number" ? (
          <InputNumber name={formType.name} min={0} />
        ) : formType.type === "date" ? (
          <DatePicker name={formType.name} format="MM/DD/YYYY" />
        ) : formType.type === "year" ? (
          <DatePicker name={formType.name} picker="year" />
        ) : formType.type === "checkBox" ? (
          <Checkbox name={formType.name} />
        ) : (
          "Unrecognized Form Type"
        )}
      </Form.Item>
    </>
  );
};

export default FormGen;
