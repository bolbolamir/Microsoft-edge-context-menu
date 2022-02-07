import { OptionCategory } from "./OptionCategory.js";
import { Item } from "./Item.js";
import {
    SVG_24hour,
    SVG_Add,
    SVG_Gallery,
    SVG_Notify,
    SVG_ReadAloud,
} from "./SVGCopmponents";

const OptionList = ({}) => {
    return (
        <>
            <ul className="option-list">
                <OptionCategory>
                    <Item
                        hasIcon={true}
                        Icon={SVG_24hour}
                        shortCut="Alt+Left arrow"
                    >
                        Back
                    </Item>
                    <Item
                        hasIcon={true}
                        Icon={SVG_Add}
                        shortCut="Alt+Right arrow"
                        isDisabled={true}
                    >
                        Forward
                    </Item>
                    <Item shortCut="Ctrl+R">Refresh</Item>
                </OptionCategory>
                <OptionCategory>
                    <Item hasIcon={true} Icon={SVG_ReadAloud} shortCut="Ctrl+S">
                        Save as
                    </Item>
                    <Item shortCut="Ctrl+P">Print</Item>
                    <Item hasIcon={true} Icon={SVG_Notify}>
                        Cast media to device
                    </Item>
                </OptionCategory>
                <OptionCategory>
                    <Item
                        hasIcon={true}
                        Icon={SVG_Gallery}
                        shortCut="Ctrl+Shift+U"
                    >
                        Read aloud
                    </Item>
                    <Item hasIcon={true} Icon={SVG_ReadAloud}>
                        Translate to English
                    </Item>
                </OptionCategory>
                <OptionCategory>
                    <Item
                        hasOptions={true}
                        options={
                            <OptionCategory data-ispopover={true}>
                                <Item hasIcon={true} Icon={SVG_ReadAloud}>
                                    uuu
                                </Item>
                                <Item hasIcon={true} Icon={SVG_ReadAloud}>
                                    uuu
                                </Item>
                                <Item hasIcon={true} Icon={SVG_ReadAloud}>
                                    uuu
                                </Item>
                            </OptionCategory>
                        }
                    >
                        ffwe
                    </Item>
                </OptionCategory>
            </ul>
        </>
    );
};

export { OptionList };
