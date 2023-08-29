import projectComponent from "./project.js";
import { projects } from "./projectData.js";

const targetElement = document.querySelector(".project-container");

const projectList = () => {
  targetElement.innerHTML = projects
    .map((project) => {
      return projectComponent(project);
    })
    .join("");
};

export default projectList;
