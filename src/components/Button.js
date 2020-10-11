import './Button.scss';

function Button(styles, text = '', handler = () => {}) {
    const STYLES = ['dark-gray', 'gray', 'orange', 'long'];
    const DEFAULT_STYLE = STYLES[0];

    const getValidStyles = () => {
        const validStyles = styles.filter((style) => STYLES.includes(style));

        if (validStyles.length === 0) return [DEFAULT_STYLE];

        return validStyles;
    }

    const createButton = () => {
        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';

        const validStyles = getValidStyles();
        buttonElement.classList.add('button');
        validStyles.forEach((style) => {
            buttonElement.classList.add(style);
        });

        buttonElement.innerText = text;

        return buttonElement;
    }

    const buttonElement = createButton();
    buttonElement.addEventListener('click', handler);

    return {
        render: (appendElement) => {
            appendElement.append(buttonElement);
        },

        get() {
            return buttonElement;
        }
    }
};

export default Button;
