import React, { forwardRef } from "react";

function Input(props, ref) {
  let { label, type = "text" } = props;
  return (
    <>
      <section className="mb-3">
        <label htmlFor="" className="form-label">
          {label}
        </label>

        <input
          type={type}
          className="form-control"
          placeholder={`Enter ${label}`}
          // onChange={handelChange}
          // value={formInputs.username}
          name="username"
          ref={ref}
        />
      </section>
    </>
  );
}

export default forwardRef(Input);
