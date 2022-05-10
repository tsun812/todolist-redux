import "./App.css";
import "antd/dist/antd.less";
import { Input, Button, List } from "antd";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const data = useSelector((state) => state.todo.value);
  console.log(data);
  return (
    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
      <div>
        <Input
          placeholder="Enter here"
          style={{ width: "200px", marginRight: "20px" }}
        />
        <Button type="primary">Submit</Button>
      </div>
      <div>
        <List
          dataSource={data}
          renderItem={(item) => <List.Item>{item.title}</List.Item>}
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
}

export default App;
