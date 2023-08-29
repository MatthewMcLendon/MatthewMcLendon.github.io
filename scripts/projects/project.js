const projectComponent = (project) => {
  console.log(project);
  return `
    <div class="project-card">
        <h3>${project.name}</h3>
        <picture>
            <img src=${project.image} alt=${project.name}>
        </picture>
        <p>${project.description}</p>
        <p>Made with:</p>
        <ul>
         ${project.tools
           .map((tool) => {
             return `<li>${tool}</li>`;
           })
           .join("")}
        </ul>
    </div>
    `;
};

export default projectComponent;
