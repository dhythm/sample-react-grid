import { RowDetailState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from "@devexpress/dx-react-grid-material-ui";
import React, { useState } from "react";
import { employees } from "./employees";
import { CollapsiblePlugin } from "./plugins/CollapsiblePlugin";

export const CustomDetail = () => {
  const [columns] = useState([
    { name: "Prefix", title: "Title" },
    { name: "FirstName", title: "First Name" },
    { name: "LastName", title: "Last Name" },
    { name: "Position", title: "Position" },
  ]);
  const [rows, setRows] = useState(employees);

  return (
    <Grid
      rows={rows}
      columns={columns}
      rootComponent={(props) => <Grid.Root {...props} />}
    >
      <RowDetailState defaultExpandedRowIds={[1]} />
      <Table />
      <TableHeaderRow />
      <TableRowDetail />
      <CollapsiblePlugin />
    </Grid>
  );
};
