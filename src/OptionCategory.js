import { Item } from "./Item.js";

const OptionCategory = ({ children, isPopOver }) => {
    return (
        <li
            className="option-category"
            data-ispopover={isPopOver}
            aria-haspopup={isPopOver ? "menu" : null}
        >
            <ul>{children}</ul>
        </li>
    );
};

export { OptionCategory };
