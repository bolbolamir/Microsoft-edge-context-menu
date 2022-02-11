import { icons } from "./icons";

function itemify(item , nestingLevel = 0) {
    return !item.isSeperator ? (
        <li className="menu-item" key={item.id.toString()}>
            <button onClick={item.onClick} disabled={item.isDisabled}>
                <span aria-hidden="true">{item.icon}</span>
                {item.name}
                <kbd aria-label="key binding" aria-hidden={!item.shortcut}>
                    {item.shortcut}
                </kbd>
                <span aria-hidden="true">
                    {item.options != null ? icons.SVG_RightArrow : null}
                </span>
            </button>
            {item.options ? (
                <ul data-ispopover="true" className="context-menu" role="menu" data-nestingLevel = {nestingLevel}>
                    {item.options.map((item) => {
                        return itemify(item, nestingLevel + 1);
                    })}
                </ul>
            ) : null}
        </li>
    ) : (
        <li role="separator" key={item.id.toString()}></li>
    );
}

const ContextMenu = ({ items }) => {
    let mappedItems = items.map((item) => itemify(item));
    return <ul className="context-menu">{mappedItems}</ul>;
};

export { ContextMenu };
