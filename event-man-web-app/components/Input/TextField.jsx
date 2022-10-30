import React from "react";
import { Field } from "formik";

function TextField({ id, name, type, onChange, onBlur, value, placeholder }) {
  return (
    <div
      className={
        "w-[330px] px-6 rounded-3xl  h-10  flex justify-center items-center"
      }
      style={{ backgroundColor: "#2d3236" }}
    >
      <Field
        className={"flex-1"}
        style={{ outline: "none", color: "white", backgroundColor: "#2d3236" }}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
