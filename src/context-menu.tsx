import Icon from "./icons";
import "./context-menu.css";
import React, {
    JSXElementConstructor,
    useCallback,
    useEffect,
    useState,
} from "react";

export type item = {
    id: number | string;
    name?: string;
    shortcut?: Array<string>;
    disabled?: boolean;
    icon?: JSX.Element | null;
    options?: Array<item>;
    seperator?: boolean;
    onClick?: () => void;
};

function itemify(item: item, theme: string, nestingLevel: number = 0) {
    if (item.seperator) {
        return <li role="separator" key={item.id.toString()}></li>;
    }

    return (
        <li className="menu-item" key={item.id.toString()}>
            <button onClick={item.onClick} disabled={item.disabled}>
                <span aria-hidden="true">{item.icon}</span>
                {item.name}
                <kbd aria-label="key binding" aria-hidden={!item.shortcut}>
                    {item.shortcut instanceof Array
                        ? item.shortcut.join("+")
                        : null}
                </kbd>
                <span aria-hidden="true">
                    {item.options != null ? Icon("SVG_rightArrow") : null}
                </span>
            </button>
            {item.options ? (
                <ul
                    data-ispopover="true"
                    className="context-menu"
                    role="menu"
                    data-nesting-level={nestingLevel}
                    data-theme={theme}
                >
                    {item.options.map((item) => {
                        return itemify(item, theme, nestingLevel + 1);
                    })}
                </ul>
            ) : null}
        </li>
    );
}

const ContextMenu = ({
    items,
    theme,
}: {
    items: Array<item>;
    theme: string;
}) => {
    const [showing, setShowing] = useState<boolean>(false);
    const [yAxis, setYAxis] = useState<string>("0px");
    const [xAxis, setXAxis] = useState<string>("0px");

    const handleClosing = useCallback((event) => {
        let element = document.querySelector(".context-menu");
        if (element) {
            let elementPositon = element.getBoundingClientRect();

            if (
                event.clientX > elementPositon.left &&
                event.clientX < elementPositon.right &&
                event.clientY > elementPositon.top &&
                event.clientY < elementPositon.bottom
            ) {
                return 0;
            } else {
                setShowing(false);
            }
        }
    }, []);

    const handleShowing = useCallback((event) => {
        setShowing(true);
        setXAxis(`${event.clientX}px`);
        setYAxis(`${event.clientY}px`);
    }, []);

    showing
        ? window.addEventListener("click", handleClosing)
        : window.removeEventListener("click", handleClosing);

    useEffect(() => {
        window.addEventListener("contextmenu", handleShowing);
        return () => {
            window.removeEventListener("contextmenu", handleShowing);
        };
    }, [handleShowing]);

    let mappedItems = items.map((item: item,) =>
        itemify(item, theme)
    );
    let style = { top: yAxis, left: xAxis };
    return showing ? (
        <ul className="context-menu" style={style} data-theme={theme}>
            {mappedItems}
        </ul>
    ) : null;
};

export { ContextMenu };
