import { Input, Button, List, Form, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./store/reducer";
export default function TodoListItem({ id, title, completed }) {
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
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
        <Form.Item>
          <Button type="danger" htmlType="submit" onClick={handleDelete}>
            Delete
          </Button>
        </Form.Item>
      </Form>
      {title}
    </List.Item>
  );
}
