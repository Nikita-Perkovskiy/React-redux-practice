import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import "./index.scss";

const Textarea = ({
  placeholder,
  label,
  name,
  className,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <label className={cx("form-item", className)}>
        <p className="form-label">{label}</p>
        <textarea
          className="form-control"
          name={name}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          row="3"
        ></textarea>
      </label>
      <ErrorMessage name={name} className="error-message" component={"p"} />
    </>
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};

export default Textarea;
