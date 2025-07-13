import React, {useEffect, useState} from "react";

import {LayoutManager} from "ui-layout-manager";

import VSCodeLayout from "./vsCodeLayout.json";
import colRowLayout from "./colRowLayout.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

/**
 * Renders the application.
 *
 * @return {JSX.Element}
 */
export function App () {
    return (
        <LayoutManager ldf={colRowLayout}/>
    );
}
