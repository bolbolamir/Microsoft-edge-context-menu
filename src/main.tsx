import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { ContextMenu , type item } from "./context-menu.tsx";
import { icons } from "./icons.tsx";

let items : Array<item> = [
                {
                    name: "Back",
                    shortcut: ["Alt","Left" ,"arrow"],
                    icon: icons.SVG_24hour,
                    id: 1,
                },
                {
                    name: "Forward",
                    shortcut: ["Alt","Right", "arrow"],
                    icon: icons.SVG_Add,
                    isDisabled: true,
                    id: 2,
                },
                {
                    name: "Refresh",
                    shortcut: ["Ctrl","R"],
                    id: 3,
                },
                { seperator: true, id: 5555 },
                {
                    name: "Save as",
                    shortcut: ["Ctrl","S"],
                    icon: icons.SVG_ReadAloud,
                    id: 4,
                },
                {
                    name: "Cast media to device",
                    icon: icons.SVG_Notify,
                    id: 5,
                },
                {
                    name: "See more",
                    id: 6,
                    options: [
                        {
                            name: "Back",
                            shortcut: ["Alt","Left", "arrow"],
                            id: 6.1,
                            options: [
                                {
                                    name: "Back",
                                    shortcut: ["Alt","Left", "arrow"],
                                    id: 6.1,
                                },
                                {
                                    name: "Forward",
                                    shortcut: ["Alt", "Right" ,"arrow"],
                                    icon: icons.SVG_Add,
                                    isDisabled: true,
                                    id: 6.2,
                                },
                                { name: "xxz", id: 6.3 },
                            ],
                        },
                        {
                            name: "Forward",
                            shortcut: ["Alt", "Right" ,"arrow"],
                            icon: icons.SVG_Add,
                            isDisabled: true,
                            id: 6.2,
                        },
                        { name: "xxz", id: 6.3 },
                    ],
                },
            ]

ReactDOM.render(
    <React.StrictMode>
        <ContextMenu
            items={items}
        ></ContextMenu>
    </React.StrictMode>,
    document.getElementById("root")
);
