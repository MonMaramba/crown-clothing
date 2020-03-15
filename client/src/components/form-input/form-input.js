import React from "react";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label
        className={`${
          props.length ? "shrink" : "" //will only add the classname 'shrink' when user starts typing
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
