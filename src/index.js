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
                    id: 1,
                },
                {
                    name: "Forward",
                    shortcut: "Alt+Right arrow",
                    icon: "SVG_Add",
                    isDisabled: true,
                    id: 2,
                },
                {
                    name: ">Refresh",
                    shortcut: "Ctrl+R",
                    id: 3,
                },
                {
                    name: "Save as",
                    shortcut: "Ctrl+S",
                    icon: "SVG_ReadAloud",
                    id: 4,
                },
                {
                    name: "Cast media to device",
                    icon: "SVG_Notify",
                    id: 5,
                },
                {
                    name: "See more",
                    id: 6,
                    options: [
                        { name: "Back", shortcut: "Alt+Left arrow", id: 6.1 },
                        {
                            name: "Forward",
                            shortcut: "Alt+Right arrow",
                            icon: "SVG_Add",
                            isDisabled: true,
                            id: 6.2,
                        },
                        { name: "xxz", id: 6.3 },
                    ],
                },
            ]}
        ></ContextMenu>
    </React.StrictMode>,
    document.getElementById("root")
);
