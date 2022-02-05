import Item from "./Item"

const OptionCategory = (props) => {
    return (
        <ul className="optionCategory">
            {props.children}
        </ul>
     );
}

export default OptionCategory;