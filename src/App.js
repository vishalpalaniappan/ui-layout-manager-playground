import React, {useMemo} from "react";

import {LayoutManager} from "ui-layout-manager";

import VariableTreev2 from "./VariableTreev2.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

/**
 * Renders the application.
 *
 * @return {JSX.Element}
 */
export function App () {
    const registry = useMemo(() => ({
        EditorVSCode: () =>
            import("./sample_components/editor/EditorVSCode").then((m) => ({
                default: m.default || m.EditorVSCode,
            })),
        Stack: () =>
            import("./sample_components/stack/Stack").then((m) => ({
                default: m.default || m.Stack,
            })),
        Flow: () =>
            import("./sample_components/flow/Flow").then((m) => ({
                default: m.default || m.Flow,
            })),
    }), []);


    return (
        <LayoutManager registry={registry} ldf={VariableTreev2}/>
    );
}
