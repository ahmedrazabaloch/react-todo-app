import { React } from "react";
import { Input } from "antd";
const InputApp = ({ placeholder, id, onChange }) => (
  <Input placeholder={placeholder} id={id} onChange={onChange} />
);
export default InputApp;
