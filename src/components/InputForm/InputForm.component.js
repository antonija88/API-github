import React from "react";

const InputForm = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit}>
    <input className="form-control" placeholder="Please enter username" type="text" value={value} onChange={onChange} />
    <div className="mt-2">
    <button className="btn btn-primary" type="submit">Search</button>
    </div>
  </form>
);

export default InputForm;
