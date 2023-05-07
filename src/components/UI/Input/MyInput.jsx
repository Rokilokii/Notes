import React from "react";
import "./MyInput.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className="myInput" />;
});

export default MyInput;
