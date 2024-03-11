export const createTitleTemplate = (title) => {
    return `
        <h2>
            ${title}
        </h2>
    `;
  };
  export const createEarlyAccessTopTemplate = (early_access) => {
    return `
    <a href="#" class="left_cta_blue">${early_access}</a>
    `;
  };
  export const createEarlyAccessBotTemplate = (early_access) => {
    return `
    <a href="#" class="left_cta_orange">${early_access}</a>
    `;
  };
  
  
  export const createDescriptionTemplate = (description) => {
    return `
      <p>
        ${description}
      </p>
    `;
  };
  
  export const createIllustrationTemplate = ({ src, alt }) => {
    return `
      <img src="${src}" alt="${alt}" />
    `;
  };
  
  export const expectationsTemplate = ({
    early_access,
    illustration,
    title,
    description,
  }) => {
    const titleTemplate = createTitleTemplate(title);
    const early_accessTopTemplate = createEarlyAccessTopTemplate(early_access);
    const early_accessBotTemplate = createEarlyAccessBotTemplate(early_access);
    const descriptionTemplate = createDescriptionTemplate(description);
    const illustrationTemplate = createIllustrationTemplate(illustration);
  
    const resultTemplate = `
    <div class="expectations_section_img">
        ${illustrationTemplate}
    </div>
    <div class="expectations_section_text">
        ${early_accessTopTemplate}
        ${titleTemplate}
        ${descriptionTemplate}
        ${early_accessBotTemplate}
    </div>
    `;

    return resultTemplate;
  };