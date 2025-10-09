import Users from "./components/User/Users";
import style from "./App.module.css";
import UserList from "./components/UserList";
import UserInput from "./components/UserInput";
import { UserContextProvider } from "./context/user.context";
import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
function App() {
  let cssStyle = { backgroundColor: "red", color: "white" };
  return (
    <>
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route path="/users" element={<UserList />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
