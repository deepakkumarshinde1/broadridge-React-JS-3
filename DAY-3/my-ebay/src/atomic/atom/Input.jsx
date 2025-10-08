function Input(props) {
  return (
    <input
      type={props.type ? props.type : "text"}
      className="form-control rounded-0"
      placeholder={`Enter ${props.label}`}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
}

export default Input;
