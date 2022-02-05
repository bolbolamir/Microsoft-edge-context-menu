import OptionCategory from './OptionCategory';
import Item from "./Item";

const OptionList = (props) => {
    return (
        <>
            <article className="optionList">
                <ul className="optionList__list">
                    <OptionCategory>
                        <Item hasOption="true">eee</Item>
                        <Item hasOption="true">eee</Item>
                        <Item hasOption="true">eee</Item>
                    </OptionCategory>
                </ul>
            </article>
        </>
    );
}

export default OptionList;