import React from "react";
import { ErrorMessage } from "formik";

function ValidationErrorText({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <div className={"error-msg"}>{msg}</div>}
    />
  );
}

export default ValidationErrorText;
