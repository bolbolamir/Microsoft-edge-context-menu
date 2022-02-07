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
                <div className="item__icon-wrapper">
                    {hasIcon ? icon : null}
                </div>
                <p className="item__text">{children} </p>
                <small className="item__shoutcut">{shortCut}</small>
                <div className="item__option-wrapper">
                    {hasOptions ? <RightArrow /> : null}
                </div>
                {options ? options : null}
            </button>
        </li>
    );
};

export { Item };
