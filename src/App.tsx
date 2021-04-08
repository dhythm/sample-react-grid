// @ts-nocheck
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { Paper } from "@material-ui/core";
import React from "react";
import "./App.css";

const columns = [
  { name: "id", title: "ID" },
  { name: "product", title: "Product" },
  { name: "owner", title: "Owner" },
];
const rows = [
  { id: 0, product: "DevExtreme", owner: "DevExpress" },
  { id: 1, product: "DevExtreme Reactive", owner: "DevExpress" },
];

function App() {
  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
        rootComponent={(props) => <Grid.Root {...props} />}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
}

export default App;
