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
    return (
        <li className="item">
            <article onClick={onClick} disabled={isDisabled} role="button">
                <div className="item-icon-wrapper" aria-hidden="true">
                    {hasIcon ? icon : null}
                </div>
                <p className="item-text">{children}</p>

                <small className="item-shoutcut" aria-hidden={!shortCut}>
                    <kbd aria-label="key binding">{shortCut}</kbd>
                </small>
                <div className="item-option-wrapper" aria-hidden="true">
                    {hasOptions ? <RightArrow /> : null}
                </div>
                {hasOptions ? options : null}
            </article>
        </li>
    );
};

export { Item };
