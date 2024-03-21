export const createHeaderTemplate = (header) => {
    return `
      <h1>
        ${header}
      </h1>
    `;
};

export const createButtonTemplate = (buttonText) => {
  return `
  <button>${buttonText}</button>
  `;
};


export const createMenuStartTemplate = (logo, logoDescription) => {

  return `
  <div class="header__logo">
      <a href="#" class="logo__link">
          <img class=${logo.class} src=${logo.src} width=${logo.width} height=${logo.height}/>
      </a>
  </div>
  <p>${logoDescription}</p>
  `;
};

export const createMenulinks = ({href, text}) => {
    return `
    <a href=${href}>${text}</a>
    `;
};

export const createMenuItemsTemplate = (footMenuItems) => {
  const {footMenuFirstItem, footMenuSecondItem, footMenuThirdtItem} = footMenuItems;
  
  const firstItem = footMenuFirstItem
    .map((footMenuFirstItem) => createMenulinks(footMenuFirstItem))
    .join("");

  const secondItem = footMenuSecondItem
    .map((footMenuSecondItem) => createMenulinks(footMenuSecondItem))
    .join("");
  
  const thirdItem = footMenuThirdtItem
    .map((footMenuThirdtItem) => createMenulinks(footMenuThirdtItem))
    .join("");

  const template = `
    <div class="foot_menu_item">
      <h3>Ссылки</h3>
      ${firstItem}
    </div>
    <div class="foot_menu_item">
      <h3>Компания</h3>
      ${secondItem}
    </div>
    <div class="foot_menu_item foot_menu_items_end">
      <h3>Контакты</h3>
      ${thirdItem}
    </div>
  `;

  return template;
};

export const footerTemplate = ({
  header,
  buttonText,
  logoDescription,
  logo,
  footMenuItems
}) => {
  const headerTemplate = createHeaderTemplate(header);
  const buttonTemplate = createButtonTemplate(buttonText);
  const menuStartTemplate = createMenuStartTemplate(logo, logoDescription);
  const menuItemsTemplate = createMenuItemsTemplate(footMenuItems);



  const resultTemplate = `
  <div>
      <div class="go_to_feature">
        ${headerTemplate}
        ${buttonTemplate}
      </div>
      <div class="foot_menu">
        <div class="foot_menu_start">
          ${menuStartTemplate}
        </div>
        <div class="foot_menu_items">
          ${menuItemsTemplate}
        </div>
      </div>
    </div>
  `;

  return resultTemplate;
};
