import { Input, Button, List, Form, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { toggleComplete } from "./store/reducer";
export default function TodoListItem({ id, title, completed }) {
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
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
          <Checkbox checked={completed} onChange={handleComplete}></Checkbox>
        </Form.Item>
      </Form>
      {title}
    </List.Item>
  );
}
