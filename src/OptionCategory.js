import { Item } from "./Item.js";

const OptionCategory = ({ children, isPopOver }) => {
    return <ul className="option-category" data-ispopover={isPopOver}>{children}</ul>;
};

export { OptionCategory };
