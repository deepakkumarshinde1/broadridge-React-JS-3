import { useState } from "react";

function Login() {
  let [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  });
  let handelChange = (event) => {
    let { value, name } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  let makeLogin = (event) => {
    event.preventDefault();
    console.log(formInputs);
  };
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-lg-6 col-md-8 col-10 card mt-4">
          <form onSubmit={makeLogin} action="" className="card-body">
            <section className="mb-3">
              <label htmlFor="" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                onChange={handelChange}
                value={formInputs.username}
                name="username"
              />
            </section>
            <section className="mb-3">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={handelChange}
                value={formInputs.password}
                name="password"
              />
            </section>
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
