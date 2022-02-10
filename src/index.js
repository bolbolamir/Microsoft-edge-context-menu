import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextMenu } from "./ContextMenu.js";

ReactDOM.render(
    <React.StrictMode>
        <ContextMenu
            items={[
                {
                    name: "Back",
                    shortcut: "Alt+Left arrow",
                    icon: "SVG_24hour",
                },
                {
                    name: "Forward",
                    shortcut: "Alt+Right arrow",
                    icon: "SVG_Add",
                    isDisabled: true,
                },
                {
                    name: ">Refresh",
                    shortcut: "Ctrl+R",
                },
                {
                    name: "Save as",
                    shortcut: "Ctrl+S",
                    icon: "SVG_ReadAloud",
                },
                {
                    name: "Cast media to device",
                    icon: "SVG_Notify",
                },
                {
                    name: "See more",
                    options: [
                        { name: "Back", shortcut: "Alt+Left arrow" },
                        {
                            name: "Forward",
                            shortcut: "Alt+Right arrow",
                            icon: "SVG_Add",
                            isDisabled: true,
                        },
                        { name: "xxz" },
                    ],
                },
            ]}
        ></ContextMenu>
    </React.StrictMode>,
    document.getElementById("root")
);
