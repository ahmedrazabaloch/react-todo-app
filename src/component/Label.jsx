import React from "react";

const Label = ({ value, htmlFor }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{value}</label>
    </div>
  );
};

export default Label;
