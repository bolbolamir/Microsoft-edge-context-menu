import { icons } from "./icons";

function i(item) {
    return (
        <li className="menu-item" key={item.id.toString()}>
            <button onClick={item.onClick} disabled={item.isDisabled}>
                <span className="item-icon-wrapper" aria-hidden="true">
                    {item.icon}
                </span>
                <span className="item-text">{item.name}</span>
                <kbd
                    aria-label="key binding"
                    className="item-shoutcut"
                    aria-hidden={!item.shortcut}
                >
                    {item.shortcut}
                </kbd>
                <span className="item-option-wrapper" aria-hidden="true">
                    {item.options != null ? icons.SVG_RightArrow : null}
                </span>
                {item.options ? (
                    <ul data-ispopover="true">i(item.options)</ul>
                ) : null}
            </button>
        </li>
    );
}

const ContextMenu = ({ items }) => {
    let mappedItems = items.map((item) => {
        return (
            <li className="menu-item" key={item.id.toString()}>
                <button onClick={item.onClick} disabled={item.isDisabled}>
                    <span className="item-icon-wrapper" aria-hidden="true">
                        {item.icon}
                    </span>
                    <span className="item-text">{item.name}</span>
                    <kbd
                        aria-label="key binding"
                        className="item-shoutcut"
                        aria-hidden={!item.shortcut}
                    >
                        {item.shortcut}
                    </kbd>
                    <span className="item-option-wrapper" aria-hidden="true">
                        {item.options != null ? icons.SVG_RightArrow : null}
                    </span>
                    {item.options ? (
                        <ul data-ispopover="true">
                            {item.options.map((item) => {
                                return (
                                    <li
                                        className="menu-item"
                                        key={item.id.toString()}
                                    >
                                        <button
                                            onClick={item.onClick}
                                            disabled={item.isDisabled}
                                        >
                                            <span
                                                className="item-icon-wrapper"
                                                aria-hidden="true"
                                            >
                                                {item.icon}
                                            </span>
                                            <span className="item-text">
                                                {item.name}
                                            </span>
                                            <kbd
                                                aria-label="key binding"
                                                className="item-shoutcut"
                                                aria-hidden={!item.shortcut}
                                            >
                                                {item.shortcut}
                                            </kbd>
                                            <span
                                                className="item-option-wrapper"
                                                aria-hidden="true"
                                            >
                                                {/* {item.options ? icons.SVG_RightArrow : null} */}
                                            </span>{" "}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                </button>
            </li>
        );
    });
    console.log(mappedItems);
    return <ul className="context-menu">{mappedItems}</ul>;
};

// const Item = ({ onClick, isDisabled, children, options, icon, shortCut }) => {
//     return (
//         <li className="menu-item">
//             <button onClick={onClick} disabled={isDisabled}>
//                 <span className="item-icon-wrapper" aria-hidden="true">
//                     {icon}
//                 </span>
//                 <span className="item-text">{children}</span>
//                 <kbd
//                     aria-label="key binding"
//                     className="item-shoutcut"
//                     aria-hidden={!shortCut}
//                 >
//                     {shortCut}
//                 </kbd>
//                 <span className="item-option-wrapper" aria-hidden="true">
//                     {options ? <SVG_RightArrow /> : null}
//                 </span>
//                 {options}
//             </button>
//         </li>
//     );
// };

// const ItemsCategory = ({ children, isPopOver }) => {
//     return (
//         <li
//             className="items-category"
//             data-ispopover={isPopOver}
//             aria-haspopup={isPopOver ? "menu" : null}
//         >
//             <ul>{children}</ul>
//         </li>
//     );
// };
export { ContextMenu };
