import { createContext, useContext, useState } from "react";

const ProjectsContext = createContext();
export function useProjectsContext() {
  return useContext(ProjectsContext);
}
let _projects = [
  {
    _id: "64a1e8f0c0a1b20001000004",
    name: "Portfolio Website",
    techStack: ["React", "Gatsby", "GraphQL"],
    description:
      "A modern React-based portfolio, with GraphQL data layer, animations, blog and project filtering.",
    keywords: ["portfolio", "gatsby", "react", "graphql"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI1OXwwfDF8c2VhcmNofDZ8fG1vY2t1cCUyMHdlYnNpdGV8ZW58MHx8fHwxNjk3MzQ5MjE2&ixlib=rb-1.2.1&w=800",
  },

  {
    _id: "64a1e8f0c0a1b20001000009",
    name: "Blog Platform",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Blog system supporting markdown posts, user comments, tags, and admin content moderation.",
    keywords: ["blog", "cms", "mern", "markdown"],
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI1OXwwfDF8c2VhcmNofDJ8fGJsb2clMjBjYWR8ZW58MHx8fHwxNjk3MzQ5MzM3&ixlib=rb-1.2.1&w=800",
  },

  {
    _id: "64a1e8f0c0a1b20001000011",
    name: "Weather Dashboard",
    techStack: ["Vue.js", "Chart.js", "OpenWeather API"],
    description:
      "Dashboard app showing current conditions, 7-day forecast, and interactive charts per city.",
    keywords: ["weather", "dashboard", "charts", "forecast"],
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI1OXwwfDF8c2VhcmNofDR8fHdlYXRoZXIlMjBhcHB8ZW58MHx8fHwxNjk3MzQ5NDY2&ixlib=rb-1.2.1&w=800",
  },

  {
    _id: "64a1e8f0c0a1b20001000013",
    name: "Learning Management System",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "LMS platform with course creation, student dashboards, assignments, and progress tracking.",
    keywords: ["lms", "education", "learning", "mern"],
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI1OXwwfDF8c2VhcmNofDR8fGxlbmdybmluZyUyMGFwcHxlbnwwfHx8fDE2OTczNDk1MDk&ixlib=rb-1.2.1&w=800",
  },

  {
    _id: "64a1e8f0c0a1b20001000015",
    name: "Finance Tracker",
    techStack: ["React", "Redux", "Express", "MongoDB"],
    description:
      "Personal finance manager to log income, expenses, categories and view monthly analytics.",
    keywords: ["finance", "tracker", "budget", "mern"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI1OXwwfDF8c2VhcmNofDh8fGZpbmFuY2UlMjBhbmFseXRpY3N8ZW58MHx8fHwxNjk3MzQ5NjQ3&ixlib=rb-1.2.1&w=800",
  },
];
export function ProjectsContextProvider(props) {
  let [projects] = useState(_projects);
  let shared = {
    projects,
  };
  return (
    <ProjectsContext.Provider value={shared}>
      {props.children}
    </ProjectsContext.Provider>
  );
}
