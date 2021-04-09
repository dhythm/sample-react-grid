import { Action, Plugin } from "@devexpress/dx-react-core";
import React from "react";

export const CollapsiblePlugin = () => (
  <Plugin name="CollapsiblePlugin">
    <Action
      name="toggleDetailRowExpanded"
      action={(payload, getters, actions) => {
        console.log({ payload, getters, actions });
        const { rowId } = payload;
        const { expandedDetailRowIds } = getters;
        const isCollapsing = expandedDetailRowIds.indexOf(rowId) > -1;
        console.log({ name: "payload", ...payload });
        console.log({ name: "getters", ...getters });
        console.log({ name: "actions", ...actions });
        console.log({ isCollapsing });
      }}
    />
  </Plugin>
);
