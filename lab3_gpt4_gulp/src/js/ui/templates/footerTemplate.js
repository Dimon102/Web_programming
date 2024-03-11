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

  export const createMenuItemsTemplate = (FootMenuItems) => {
    return `
    <div class="foot_menu_item">
        <h3>Ссылки</h3>
        <a href="">Овероны</a>
        <a href="">Соц. сети</a>
        <a href="">Счетчики</a>
        <a href="">Контакты</a>
    </div>
    <div class="foot_menu_item">
        <h3>Компания</h3>
        <a href="">Условия использования</a>
        <a href="">Перс. данные</a>
        <a href="">Конаткты</a>
    </div>
    <div class="foot_menu_item foot_menu_items_end">
        <h3>Контакты</h3>
        <p>ул. Профессора Поздеева, 13, к.Г, Пермь</p>
        <p>+7 (342) 2-198-520</p>
        <a href="">info@pstu.ru</a>
    </div>
    `;
  };
  
  export const footerTemplate = ({
    header,
    buttonText,
    logoDescription,
    logo,
    FootMenuItems,
  }) => {
    const headerTemplate = createHeaderTemplate(header);
    const buttonTemplate = createButtonTemplate(buttonText);
    const menuStartTemplate = createMenuStartTemplate(logo, logoDescription);
    const menuItemsTemplate = createMenuItemsTemplate(FootMenuItems);


  
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
  