import { useParams } from "react-router-dom";
import { useProjectsContext } from "../context/projects.context";
import { useEffect, useState } from "react";

export function withProjectDetails(Component) {
  return (props) => {
    let { id } = useParams();
    let { projects } = useProjectsContext();
    let [projectDetails, setProjectDetails] = useState(null);
    useEffect(() => {
      let project = projects.find((project) => project._id === id);
      if (project) {
        setProjectDetails(project);
      }
    }, []);
    return <Component {...props} projectDetails={projectDetails} />;
  };
}
