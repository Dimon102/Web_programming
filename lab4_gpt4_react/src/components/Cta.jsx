export const createHeaderTemplate = (header) => {
    return `
        <h3>
        ${header}
        </h3>
    `;
};

export const createTextTemplate = (text) => {
    return `
        <p>
        ${text}
        </p>
    `;
};

export const createButtonTemplate = (button) => {
    return `
        <button><h3>${button}<h3></button>
    `;
};


export const ctaTemplate = ({
    button,
    header,
    text,
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const buttonTemplate = createButtonTemplate(button);
    const textTemplate = createTextTemplate(text);


    const resultTemplate = `
    <div class="cta_rectangle">
        <div class="cta_text">
            ${textTemplate}
            ${headerTemplate}
        </div>
        <div class="cta_button">
            ${buttonTemplate}
        </div>
    </div>
    `;

    return resultTemplate;
};