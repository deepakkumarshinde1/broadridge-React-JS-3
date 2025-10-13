import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { ProjectsContextProvider } from "./context/projects.context";
import ProjectDetails from "./components/ProjectDetails";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="" element={<Navigate to="/projects/list" />} />
          <Route path="list" element={<ProjectList />} />
          <Route path="details/:id" element={<ProjectDetails text="hello" />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
