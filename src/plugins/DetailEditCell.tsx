import {
  Action,
  Plugin,
  Template,
  TemplateConnector,
  TemplatePlaceholder,
} from "@devexpress/dx-react-core";
import { TableRowDetail } from "@devexpress/dx-react-grid-material-ui";
import React from "react";

export const DetailEditCell = () => (
  <Plugin name="detailEdit">
    <Action
      name="toggleDetailRowExpanded"
      action={(payload, getters, actions) => {
        console.log({
          name: "DetailEditCell:Action",
          payload,
          getters,
          actions,
        });
        const { rowId } = payload;
        const { expandedDetailRowIds } = getters;
        const { startEditRows, stopEditRows } = actions;
        const rowIds = [rowId];
        const isCollapsing = expandedDetailRowIds.indexOf(rowId) > -1;
        if (isCollapsing) {
          stopEditRows({ rowIds });
        } else {
          startEditRows({ rowIds });
        }
      }}
    />
    <Template
      name="tableCell"
      predicate={(params) => {
        console.log({
          name: "DetailEditCell:Template (predicate prop)",
          params,
        });
        const { tableRow } = params as any;
        return tableRow.type === TableRowDetail.ROW_TYPE;
      }}
    >
      {(params: any) => {
        console.log({ name: "DetailEditCell:Template (render props)", params });
        return (
          <TemplateConnector>
            {(...args) => {
              const { tableColumns, createRowChange, rowChanges } = args[0];
              const {
                changeRow,
                commitChangedRows,
                cancelChangedRows,
                toggleDetailRowExpanded,
              } = args[1];

              if (tableColumns.indexOf(params.tableColumn) !== 0) {
                return null;
              }
              const {
                tableRow: { rowId },
              } = params;
              const row = { ...params.tableRow.row, ...rowChanges[rowId] };

              const processValueChange = ({ target: { name, value } }: any) => {
                const changeArgs = {
                  rowId,
                  change: createRowChange(row, value, name),
                };
                changeRow(changeArgs);
              };
              const applyChanges = () => {
                toggleDetailRowExpanded({ rowId });
                commitChangedRows({ rowIds: [rowId] });
              };
              const cancelChanges = () => {
                toggleDetailRowExpanded({ rowId });
                cancelChangedRows({ rowIds: [rowId] });
              };

              return (
                <TemplatePlaceholder
                  params={{
                    ...params,
                    row,
                    tableRow: { ...params.tableRow, row },
                    changeRow,
                    processValueChange,
                    applyChanges,
                    cancelChanges,
                  }}
                />
              );
            }}
          </TemplateConnector>
        );
      }}
    </Template>
  </Plugin>
);
