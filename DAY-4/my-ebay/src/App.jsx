import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import RegistrationForm from "./components/RegistrationForm";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <main className="container-fluid">
        <Header brandName={"E-Bay"} />
        <Routes>
          <Route path="/" element={<ProductList title={"Product List"} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-account" element={<RegistrationForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
