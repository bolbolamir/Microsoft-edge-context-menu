import Item from "./Item.js"

const OptionCategory = (props) => {
    return (
        <ul className="optionCategory">
            {props.children}
        </ul>
     );
}

export default OptionCategory;