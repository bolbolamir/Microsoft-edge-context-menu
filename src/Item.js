import RightArrow from "./RightArrow";

function Item(props) {
  // let rightArrow = <RightArrow></RightArrow>;
    return (
        <li className="item">
            <button onClick={props.onClick} disabled={props.isDisabled}>
                <div className="item__icon-wrapper">
                    {props.hasIcon ? props.Icon : null}
                </div>
                <p className="item__text">{props.children} </p>
                <small className="item__shoutcut">{props.shortCut}</small>
                <div className="item__option-wrapper">
                    {props.hasOptions ? <RightArrow />: null}
                </div>
            </button>
        </li>
    );
}

export default Item;
