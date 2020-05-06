import React from "react";
import { Form, Input, Button } from "antd";

export const AntForm: React.FC<{ onSubmit: (values: any) => void }> = ({
  onSubmit,
}) => (
  <Form data-testid="form" onFinish={onSubmit}>
    <Form.Item name="foo" rules={[{ required: true, message: "Nope" }]}>
      <Input data-testid="input" />
    </Form.Item>
    <Button htmlType="submit">Submit</Button>
  </Form>
);
