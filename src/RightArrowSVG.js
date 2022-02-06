import { SVGWrapper } from "./SVGWrapper.js";

let style = {
    fill: "currentColor",
};
const RightArrowSVG = ({}) => {
    return (
        <SVGWrapper>
            <svg
                style={style}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
            >
                <path
                    d="M332.8 854.016c-17.408-17.408-18.944-36.352-11.264-44.032L619.52 512 321.536 214.016c-15.36-15.36-14.848-29.184 5.632-49.664s36.864-18.432 49.664-5.632l330.24 330.24c14.336 14.336 13.824 29.696 0.512 45.056L376.832 865.28c-7.168 7.168-26.624 6.144-44.032-11.264z"
                    fill="#2C2C2C"
                />
            </svg>
        </SVGWrapper>
    );
};

export { RightArrowSVG as RightArrow };
