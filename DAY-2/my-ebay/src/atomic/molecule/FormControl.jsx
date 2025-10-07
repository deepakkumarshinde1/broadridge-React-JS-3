import Input from "../atom/Input";
import Label from "../atom/Label";

function FormControl(props) {
  let { label } = props;
  return (
    <section className="mb-3">
      <Label label={label} />
      <Input {...props} />
    </section>
  );
}

export default FormControl;
