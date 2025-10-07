import { Component } from "react";
import FormControl from "../atomic/molecule/FormControl";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
    };
  }
  handelInput = (event) => {
    let { value, name } = event.target;
    this.setState((state) => {
      state[name] = value;
      return state;
    });
  };
  render() {
    return (
      <section className="row">
        <section className="col-10 col-lg-5 m-auto border border-2 p-3 mt-5">
          <h3 className="text-center">User Registration</h3>
          <form action="#">
            <FormControl
              label="Name"
              value={this.state.userName}
              onChange={this.handelInput}
              name="userName"
            />

            <FormControl
              label="Mobile"
              value={this.state.userEmail}
              onChange={this.handelInput}
              name="userEmail"
            />

            <FormControl
              label="Password"
              value={this.state.userPassword}
              onChange={this.handelInput}
              name="userPassword"
              type="password"
            />

            <section className="text-center d-flex gap-3 justify-content-center">
              <button type="button" className="btn btn-success rounded-0">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger rounded-0"
              >
                Cancel
              </button>
            </section>
          </form>
        </section>
      </section>
    );
  }
}

export default RegistrationForm;
