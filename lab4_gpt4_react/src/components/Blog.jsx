export const createHeaderTemplate = (header) => {
    return `
      <h1>
        ${header}
      </h1>
    `;
  };
  
  export const createContainerRightTemplate = ({ date, header, text, src, alt }) => {
    return `
    <div class="blog_container_first">
        <img src=${src} alt=${alt}>
        <div class="blog_container_first_text">
            <p>${date}</p>
            <h3>${header}</h3>
            <a>${text}</a>
        </div>
    </div>
    `;
};

export const createContainersRightTemplate = (BlogContainersRight) => {
const ContainersRightTemplate = BlogContainersRight
  .map((BlogContainerRight) => createContainerRightTemplate(BlogContainerRight))
  .join("");

const template = `
${ContainersRightTemplate}
`;

return template;
};

  export const createContainerLeftTemplate = ({ date, header, text, src, alt }) => {
        return `
        <div class="blog_container_second">
            <img src=${src} alt=${alt}>
            <div class="blog_container_second_text">
              <p>${date}</p>
              <h3>${header}</h3>
              <a>${text}</a>
            </div>
          </div>
        `;
    };
  
  export const createContainersLeftTemplate = (BlogContainersLeft) => {
    const ContainersLeftTemplate = BlogContainersLeft
      .map((BlogContainerLeft) => createContainerLeftTemplate(BlogContainerLeft))
      .join("");
  
    const template = `
    <div class="blog_containers_second">
        ${ContainersLeftTemplate}
    </div>
    `;
  
    return template;
  };
  
  export const blogTemplate = ({
    header,
    BlogContainersLeft,
    BlogContainersRight,
  }) => {
    const headerTemplate = createHeaderTemplate(header);
    const ContainersLeftTemplate = createContainersLeftTemplate(BlogContainersLeft);
    const ContainersRightTemplate = createContainersRightTemplate(BlogContainersRight);

  
    const resultTemplate = `
    <div>
        ${headerTemplate}
    </div>
    <div class="blog_containers">
        ${ContainersRightTemplate}
        ${ContainersLeftTemplate}
    </div>
      `;
  
    return resultTemplate;
  };
  