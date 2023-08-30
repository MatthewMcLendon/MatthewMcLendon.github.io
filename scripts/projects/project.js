const projectComponent = (project) => {
  return `
  <a href=${project.link} target="_blank">
    <div class="project-card">
        <img src=${project.image} alt=${project.name}>
        <div class="project-card-description">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
        <div class="project-card-tools">
          <p>Made with</p>
          <ul>
            ${project.tools
              .map((tool) => {
                return `<li>${tool}</li>`;
              })
              .join("")}
          </ul>
        </div>
    </div>
  </a>
    `;
};

export default projectComponent;
