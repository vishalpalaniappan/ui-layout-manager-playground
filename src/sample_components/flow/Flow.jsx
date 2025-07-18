import React from "react";

import {FlowDiagram} from "sample-ui-component-library";

import SampleTree from "./SampleTree.json";

const Flow = () => {
    return (
        <FlowDiagram treeInfo={SampleTree} />
    );
};

export default Flow;
