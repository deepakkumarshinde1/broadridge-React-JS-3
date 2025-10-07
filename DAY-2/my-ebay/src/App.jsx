import { useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import RegistrationForm from "./components/RegistrationForm";

// uses a state to handel a data
// whenever a state changed a component re-renders
// it will detect the changes and as per that it will make a update in real dom
function App() {
  let [toggle, setToggle] = useState(false); // [state, updateStateMethod]
  let switchForm = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <main className="container-fluid">
        <Header brandName={"E-Bay"} />
        {/* <ProductList title={"Product List"} /> */}
        <section className="text-center" onClick={switchForm}>
          <button className={`btn btn-${toggle ? "success" : "info"}`}>
            Switch {toggle ? "To Registration" : "To Login"}
          </button>
        </section>
        {toggle ? <LoginForm /> : <RegistrationForm />}
      </main>
    </>
  );
}

export default App;
