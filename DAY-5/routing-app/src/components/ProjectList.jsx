import { useNavigate } from "react-router-dom";
import { useProjectsContext } from "../context/projects.context";

function ProjectList() {
  let navigate = useNavigate();
  let { projects } = useProjectsContext();
  return (
    <>
      <h1 className="title">Projects</h1>
      <section className="projects">
        {projects.map((project, index) => {
          return (
            <section
              onClick={() => navigate(`/projects/details/${project._id}`)}
              key={project._id}
              className="project-item"
            >
              <img src={project.image} alt="" />
              <p className="text">{project.name}</p>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default ProjectList;
