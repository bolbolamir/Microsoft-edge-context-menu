import { icons } from "./icons";
import "./context-menu.css";
import React, { useCallback, useEffect, useState } from "react";

type item = {
    id: number | string;
    name: string;
    shortcut?: string;
    isDisabled?: boolean;
    icon?: object;
    options?: Array<item>;
    seperator?: boolean;
    onClick?: () => void;
};

function itemify(item: item, nestingLevel = 0) {
    return !item.seperator ? (
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
                <ul
                    data-ispopover="true"
                    className="context-menu"
                    role="menu"
                    data-nesting-level={nestingLevel}
                >
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

const ContextMenu = ({ items }: { items: Array<item> }) => {
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

    let mappedItems = items.map((item: item) => itemify(item));
    let style = { top: yAxis, left: xAxis };
    return showing ? (
        <ul className="context-menu" style={style}>
            {mappedItems}
        </ul>
    ) : null;
};

export { ContextMenu };
