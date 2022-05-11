import "./App.css";
import "antd/dist/antd.less";
import { Input, Button, List, Form, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { add, toggleCopmlete } from "./store/reducer";
function App() {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(data);

  const onSubmit = (e) => {
    console.log(e);
    //dispatched object will get mapped to action payload
    let value = e.title;
    dispatch(add({ title: value }));
  };
  return (
    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
      <div>
        <Form onFinish={onSubmit}>
          <Form.Item label="title" name="title">
            <Input
              placeholder="Enter here"
              style={{ width: "200px", marginRight: "20px" }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <List
          dataSource={data}
          renderItem={(item) => (
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
              {item.title}
            </List.Item>
          )}
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
}

export default App;
