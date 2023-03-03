import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import PropTypes from "prop-types";
import "./index.scss";

const Input = ({ type, placeholder, label, name, className }) => {
  return (
    <>
      <label className={cx("form-item", className)}>
        <p className="form-label">{label}</p>
        <Field
          type={type}
          className="form-control"
          name={name}
          placeHolder={placeholder}
        />
      </label>
      <ErrorMessage name={name} className="error-message" component={"p"} />
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
