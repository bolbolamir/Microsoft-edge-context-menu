import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextMenu } from "./ContextMenu.js";

ReactDOM.render(
    <React.StrictMode>
        <ContextMenu items={0}></ContextMenu>
    </React.StrictMode>,
    document.getElementById("root")
);
