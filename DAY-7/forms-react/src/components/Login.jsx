import { useRef } from "react";
import Input from "./Input";

function Login() {
  let userName = useRef(null);
  let password = useRef(null);

  // let handelChange = (event) => {
  //   let { value, name } = event.target;
  //   setFormInputs({ ...formInputs, [name]: value });
  // };

  let makeLogin = (event) => {
    event.preventDefault();
    let _username = userName.current;
    let _password = password.current;

    if (_username.value.trim().length === 0) {
      _username.focus();
      _username.style.borderColor = "red";
      return false;
    }
    _username.style.borderColor = "black";
    if (_password.value.trim().length === 0) {
      _password.style.borderColor = "red";
      _password.focus();
      return false;
    }
    _password.style.borderColor = "black";

    let formDetails = {
      username: _username.value,
      password: _password.value,
    };
    console.log(formDetails);
    //console.log(password.current.value);
  };
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-lg-6 col-md-8 col-10 card mt-4">
          <form onSubmit={makeLogin} action="" className="card-body">
            <Input ref={userName} label="User Name" />
            <Input ref={password} label="Password" type="password" />
            <section className="mb-3">
              <button className="btn btn-sm btn-primary">Login</button>
            </section>
          </form>
        </section>
      </section>
    </>
  );
}

export default Login;
