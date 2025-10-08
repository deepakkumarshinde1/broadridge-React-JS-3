import { useEffect, useState } from "react";
import FormControl from "../atomic/molecule/FormControl";

function LoginForm() {
  // let [userName, setUserName] = useState(""); // string, number, boolean, array, jsObject i.e {}
  //let [userPassword, setUserPassword] = useState("");
  let [loginForm, setLoginForm] = useState({
    userName: "",
    userPassword: "",
  });
  let [intervalId, setIntervalId] = useState(null);

  // mounting
  // unmounting
  useEffect(() => {
    console.log("fn Comp Mounting");
    let _intervalId = setInterval(() => {
      console.log("Interval");
    }, 1000);
    setIntervalId(_intervalId);
    console.log("mounting");

    return () => {
      clearInterval(_intervalId);
      console.log("fn comp unmounting");
    };
  }, []); // [] => mounting

  // update
  useEffect(() => {
    console.log("update");
  }, [loginForm]);

  let handelInput = (event) => {
    let { value, name } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  let makeLogin = () => {
    console.log(loginForm);
  };
  return (
    <section className="row">
      <section className="col-10 col-lg-5 m-auto border border-2 p-3 mt-5">
        <h3 className="text-center">User Login</h3>
        <form action="#">
          <FormControl
            label="User Name"
            value={loginForm.userName}
            onChange={handelInput}
            name="userName"
          />

          <FormControl
            label="Password"
            value={loginForm.userPassword}
            onChange={handelInput}
            name="userPassword"
            type="password"
          />

          <section className="text-center d-flex gap-3 justify-content-center">
            <button
              type="button"
              className="btn btn-success rounded-0"
              onClick={makeLogin}
            >
              Submit
            </button>
            <button type="button" className="btn btn-outline-danger rounded-0">
              Cancel
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}

export default LoginForm;
