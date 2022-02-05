function Item(props) {
    return (
        <li className="item">
            <button onClick={props.onClick}>
                <div className="item__icon-wrapper">
                    {props.hasIcon ? (
                        props.Icon
                    ) : undefined}
                </div>
                <p className="item__text">{props.children} </p>
                <small className="item__shoutcut">{props.shortCut}</small>
                <div className="item__option-wrapper">
                    {props.hasOptions ? (
                        <img src={props.option} alt="options" />
                    ) : undefined}
                </div>
        </button>
        </li>
    );
}

export default Item;
