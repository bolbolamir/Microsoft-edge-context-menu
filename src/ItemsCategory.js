import { Item } from "./Item.js";

const ItemsCategory = ({ children, isPopOver }) => {
    return (
        <li
            className="items-category"
            data-ispopover={isPopOver}
            aria-haspopup={isPopOver ? "menu" : null}
        >
            <ul>{children}</ul>
        </li>
    );
};

export { ItemsCategory };
