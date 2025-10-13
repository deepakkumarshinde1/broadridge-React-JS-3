import { Outlet } from "react-router-dom";
import { ProjectsContextProvider } from "../context/projects.context";

function Projects() {
  return (
    <>
      <ProjectsContextProvider>
        <Outlet />
      </ProjectsContextProvider>
    </>
  );
}

export default Projects;
