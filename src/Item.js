import { RightArrow } from "./SVGCopmponents.js";

const Item = ({
    onClick,
    isDisabled,
    children,
    options,
    hasOptions,
    icon,
    hasIcon,
    shortCut,
}) => {
    // let rightArrow = <RightArrow></RightArrow>;
    return (
        <li className="item">
            <button onClick={onClick} disabled={isDisabled}>
                <div className="item-icon-wrapper">{hasIcon ? icon : null}</div>
                <p className="item-text">{children} </p>
                <small className="item-shoutcut">{shortCut}</small>
                <div className="item-option-wrapper">
                    {hasOptions ? <RightArrow /> : null}
                </div>
                {options ? options : null}
            </button>
        </li>
    );
};

export { Item };
