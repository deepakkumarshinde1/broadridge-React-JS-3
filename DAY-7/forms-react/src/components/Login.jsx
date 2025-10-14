import { useRef } from "react";
import Input from "./Input";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  let schema = yup.object({
    username: yup
      .string("Invalid String")
      .min(2, "Min Length must 2 char")
      .required("User Name is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[^A-Za-z0-9\s.])(?!.*\.).{6,}$/,
        "Invalid Password"
      )
      .required("Password required"),
    role: yup.string().required("Select a role"),
    term: yup.boolean().oneOf([true], "Please agree for teams."),
    techStack: yup
      .array()
      .required("Select tech stack")
      .min(3, "Please select min 3 tech stack"),
  });
  let {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      role: "",
      term: false,
      placeName: [],
      techStack: [],
    },
    resolver: yupResolver(schema),
  });

  let { fields, append, remove } = useFieldArray({
    control,
    name: "placeName",
  });
  let makeLogin = (data) => {
    console.log(data);
  };

  console.log(fields);
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-lg-6 col-md-8 col-10 card mt-4">
          <form
            onSubmit={handleSubmit(makeLogin)}
            action=""
            className="card-body"
          >
            <section className="mb-3">
              <label htmlFor="" className="form-label">
                UserName
              </label>

              <input
                type="text"
                className={`form-control ${
                  errors.username && `border border-danger`
                }`}
                placeholder="Enter User Name"
                name="username"
                {...register("username")}
              />
              {errors.username && (
                <small className="text-danger fst-italic fw-bold">
                  {errors.username.message}
                </small>
              )}
            </section>
            <section className="mb-3">
              <label htmlFor="" className="form-label">
                Password
              </label>

              <input
                type="type"
                className={`form-control ${
                  errors.password && `border border-danger`
                }`}
                placeholder="Enter Password"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <small className="text-danger fst-italic fw-bold">
                  {errors.password.message}
                </small>
              )}

              <details>
                <summary>Password conditions</summary>
                <ul>
                  <li>Minimum 6 characters </li>
                  <li>At least 1 uppercase letter (A–Z) </li>
                  <li>At least 1 special character (non-alphanumeric) </li>
                  <li>No dots (.) allowed</li>
                </ul>
              </details>
            </section>

            <section className="mb-3">
              <label htmlFor="" className="form-label">
                Provide your places for visit
                <button
                  onClick={() => append({ city: "", state: "" })}
                  type="button"
                >
                  Add New
                </button>
              </label>

              {fields.map((field, index) => {
                return (
                  <section
                    className="d-flex align-items-end gap-3"
                    key={field.id}
                  >
                    <section>
                      <label htmlFor="" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Enter City Name"
                        {...register(`placeName.${index}.city`)}
                      />
                    </section>
                    <section>
                      <label htmlFor="" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Enter State"
                        {...register(`placeName.${index}.state`)}
                      />
                    </section>
                    <section>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </section>
                  </section>
                );
              })}
            </section>

            <section className="mb-2">
              <label htmlFor="">Select Role</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault1"
                  value="admin"
                  {...register("role")}
                />
                <label className="form-check-label" htmlFor="radioDefault1">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault2"
                  value="guest"
                  {...register("role")}
                />
                <label className="form-check-label" htmlFor="radioDefault2">
                  Guest
                </label>
              </div>
              {errors.role && (
                <small className="text-danger fst-italic fw-bold">
                  {errors.role.message}
                </small>
              )}
            </section>

            <section className="mb-3">
              <label htmlFor="">Select your tech</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="html"
                  {...register("techStack")}
                />
                <label className="form-check-label">HTML</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="css"
                  {...register("techStack")}
                />
                <label className="form-check-label">CSS</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="react"
                  {...register("techStack")}
                />
                <label className="form-check-label">React</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="java"
                  {...register("techStack")}
                />
                <label className="form-check-label">Java</label>
              </div>
              {errors.techStack && (
                <small className="text-danger fst-italic fw-bold">
                  {errors.techStack.message}
                </small>
              )}
            </section>

            <section className="mb-3">
              <label htmlFor="">Agreement</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  {...register("term")}
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  I Agree for Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Sint, eaque.
                </label>
                {errors.term && (
                  <small className="text-danger fst-italic fw-bold">
                    {errors.term.message}
                  </small>
                )}
              </div>
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
