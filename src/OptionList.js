import { OptionCategory } from "./OptionCategory.js";
import { Item } from "./Item.js";
import { SVGWrapper } from "./SVGWrapper.js";

const OptionList = ({}) => {
    let SVG_24hour = (
        <SVGWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M7.49956 8.74427C7.84708 8.36181 8.41524 7.99994 9.24996 7.99994C10.4023 7.99994 11.1442 8.792 11.4045 9.66118C11.6581 10.5078 11.5043 11.5564 10.785 12.279C10.5378 12.5274 10.2468 12.7521 9.99212 12.9487L9.9514 12.9802C9.67221 13.196 9.42286 13.3916 9.20288 13.6109C8.94689 13.8663 8.73824 14.1454 8.61656 14.4999H10.75C11.1642 14.4999 11.5 14.8357 11.5 15.2499C11.5 15.6642 11.1642 15.9999 10.75 15.9999H7.74996C7.55104 15.9999 7.36027 15.9209 7.21962 15.7803C7.07897 15.6396 6.99995 15.4488 6.99996 15.2499C6.99998 14.003 7.52397 13.1669 8.14363 12.5489C8.44003 12.2533 8.7618 12.0038 9.03412 11.7934L9.03711 11.791C9.32312 11.57 9.54503 11.3985 9.72185 11.2208C9.99417 10.9473 10.0887 10.4958 9.96757 10.0915C9.85324 9.70976 9.59759 9.49994 9.24996 9.49994C8.89717 9.49994 8.71534 9.63676 8.60973 9.753C8.55037 9.81832 8.50976 9.88475 8.48499 9.93316C8.47292 9.95674 8.46562 9.97407 8.46245 9.98203L8.46139 9.98474C8.33241 10.3717 7.91657 10.5855 7.52572 10.463C7.13045 10.3392 6.91042 9.91835 7.03426 9.52308L7.06895 9.42691C7.08751 9.38032 7.1139 9.31973 7.14969 9.24981C7.22062 9.1112 7.33236 8.92829 7.49956 8.74427ZM13.25 8.00003C13.6642 8.00003 14 8.33582 14 8.75003V11.4993H15.5V8.75003C15.5 8.33582 15.8358 8.00003 16.25 8.00003C16.6642 8.00003 17 8.33582 17 8.75003V15.2204C17 15.6346 16.6642 15.9704 16.25 15.9704C15.8358 15.9704 15.5 15.6346 15.5 15.2204V12.9993H13.25C12.8358 12.9993 12.5 12.6635 12.5 12.2493V8.75003C12.5 8.33582 12.8358 8.00003 13.25 8.00003ZM22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                    fill="#212121"
                />
            </svg>
        </SVGWrapper>
    );

    let SVG_Add = (
        <SVGWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
            >
                <path
                    d="M14.5 13.0001V3.75391C14.5 3.33991 14.164 3.00391 13.75 3.00391C13.336 3.00391 13 3.33991 13 3.75391V13.0001H3.75391C3.33991 13.0001 3.00391 13.3361 3.00391 13.7501C3.00391 14.1641 3.33991 14.5001 3.75391 14.5001H13V23.7525C13 24.1665 13.336 24.5025 13.75 24.5025C14.164 24.5025 14.5 24.1665 14.5 23.7525V14.5001L23.7499 14.5032C24.1639 14.5032 24.4999 14.1672 24.4999 13.7532C24.4999 13.3392 24.1639 13.0032 23.7499 13.0032L14.5 13.0001Z"
                    fill="#212121"
                />
            </svg>
        </SVGWrapper>
    );

    let SVG_ReadAloud = (
        <SVGWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
            >
                <path
                    d="M37.75 8C38.9926 8 40 9.00736 40 10.25V15.75C40 16.9079 39.1253 17.8616 38.0006 17.9862L38 35.75C38 38.0282 36.2075 39.8877 33.9559 39.9951L33.75 40H14.25C11.9718 40 10.1123 38.2075 10.0049 35.9559L10 35.75L10.0004 17.9863C8.87524 17.8622 8 16.9083 8 15.75V10.25C8 9.00736 9.00736 8 10.25 8H37.75ZM35.5 18H12.5V35.75C12.5 36.6682 13.2071 37.4212 14.1065 37.4942L14.25 37.5H33.75C34.6682 37.5 35.4212 36.7929 35.4942 35.8935L35.5 35.75V18ZM20.25 22.5H26.75C27.4404 22.5 28 23.0596 28 23.75C28 24.3972 27.5081 24.9295 26.8778 24.9935L26.75 25H20.25C19.5596 25 19 24.4404 19 23.75C19 23.1028 19.4919 22.5705 20.1222 22.5065L20.25 22.5H26.75H20.25ZM37.5 10.5H10.5V15.5H37.5V10.5Z"
                    fill="#212121"
                />
            </svg>
        </SVGWrapper>
    );

    let SVG_Gallery = (
        <SVGWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
            >
                <path
                    d="M4.50678 6.00782C3.60124 6.58285 3 7.59621 3 8.75V19.25C3 22.1495 5.35051 24.5 8.25 24.5H18.75C19.9038 24.5 20.9172 23.8988 21.4939 22.9925L21.3717 22.9982L21.25 23H8.25C6.17893 23 4.5 21.3211 4.5 19.25V6.25C4.5 6.16872 4.50228 6.08798 4.50678 6.00782ZM8.75 3C6.95507 3 5.5 4.45507 5.5 6.25V18.75C5.5 20.5449 6.95507 22 8.75 22H21.25C23.0449 22 24.5 20.5449 24.5 18.75V6.25C24.5 4.45507 23.0449 3 21.25 3H8.75ZM8.16845 20.4011L14.4754 14.2231C14.7405 13.9635 15.1501 13.9399 15.4414 14.1523L15.525 14.2231L21.8315 20.4011C21.6496 20.4651 21.4539 20.5 21.25 20.5H8.75C8.54613 20.5 8.3504 20.4651 8.16845 20.4011ZM8.75 4.5H21.25C22.2165 4.5 23 5.2835 23 6.25V18.75C23 18.958 22.9637 19.1576 22.8971 19.3427L16.5746 13.1515C15.7415 12.3355 14.4327 12.2967 13.5543 13.0349L13.4259 13.1515L7.10326 19.3437C7.03643 19.1583 7 18.9584 7 18.75V6.25C7 5.2835 7.7835 4.5 8.75 4.5ZM11.4996 7.75116C10.8096 7.75116 10.2503 8.31048 10.2503 9.00045C10.2503 9.69041 10.8096 10.2497 11.4996 10.2497C12.1895 10.2497 12.7488 9.69041 12.7488 9.00045C12.7488 8.31048 12.1895 7.75116 11.4996 7.75116Z"
                    fill="#212121"
                />
            </svg>
        </SVGWrapper>
    );

    let SVG_Notify = (
        <SVGWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M12 2.99993C13.1135 2.99993 14.1797 3.20213 15.164 3.57182L13.9808 4.76427C13.3498 4.59193 12.6856 4.49993 12 4.49993C7.85786 4.49993 4.5 7.85779 4.5 11.9999C4.5 13.4248 4.89727 14.7892 5.63583 15.9703C5.93764 16.453 6.29368 16.9002 6.69639 17.3029C7.09848 17.7051 7.5449 18.0607 8.02668 18.3623C9.20844 19.102 10.5739 19.4999 12 19.4999C16.1421 19.4999 19.5 16.1421 19.5 11.9999C19.5 11.3433 19.4156 10.7064 19.2571 10.0994L20.4505 8.89613C20.8059 9.86364 21 10.9091 21 11.9999C21 16.9705 16.9706 20.9999 12 20.9999C10.2904 20.9999 8.64945 20.5217 7.23081 19.6337C6.65294 19.272 6.1177 18.8456 5.63566 18.3635C5.1529 17.8807 4.72601 17.3445 4.36401 16.7656C3.4774 15.3477 3 13.7081 3 11.9999C3 7.02937 7.02944 2.99993 12 2.99993ZM21.0602 2.67188L21.2062 2.80784C22.2817 3.88398 22.285 5.62708 21.2135 6.7072L14.9096 13.0616C14.7291 13.2436 14.5049 13.3763 14.2585 13.447L10.0461 14.6559C9.78064 14.7321 9.50371 14.5786 9.42754 14.3132C9.40169 14.2231 9.40168 14.1275 9.42752 14.0374L10.6378 9.81782C10.7074 9.57525 10.837 9.35415 11.0147 9.17499L17.3236 2.81508C18.3448 1.78569 19.9803 1.73639 21.0602 2.67188ZM18.3886 3.87146L12.0796 10.2314L11.3669 12.7163L13.8447 12.0052L20.1486 5.65079C20.6057 5.18993 20.6349 4.46505 20.2371 3.97046L20.1415 3.8644C19.6555 3.3823 18.8707 3.38546 18.3886 3.87146Z"
                    fill="#212121"
                />
            </svg>
        </SVGWrapper>
    );
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
