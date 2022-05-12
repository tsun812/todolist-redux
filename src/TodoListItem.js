import { Input, Button, List, Form, Checkbox } from "antd";
export default function TodoListItem({ id, title, completed }) {
  return (
    <List.Item>
      <Form>
        <Form.Item
          name="complete"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox></Checkbox>
        </Form.Item>
      </Form>
      {title}
    </List.Item>
  );
}
