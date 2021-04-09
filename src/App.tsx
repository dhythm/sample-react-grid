import { EditingState, RowDetailState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from "@devexpress/dx-react-grid-material-ui";
import { Box, Paper } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import { DetailCell } from "./components/DetailCell";
import { DetailContent } from "./components/DetailContent";
import { ToggleCell } from "./components/ToggleCell";
import { employees } from "./employees";
import { DetailEditCell } from "./plugins/DetailEditCell";
import { Tasks } from "./plugins/TaskList";

function App() {
  const [columns] = useState([
    { name: "Prefix", title: "Title" },
    { name: "FirstName", title: "First Name" },
    { name: "LastName", title: "Last Name" },
    { name: "Position", title: "Position" },
  ]);
  const [rows, setRows] = useState(employees);

  const commitChanges = ({ changed }: any) => {
    const changedRows = rows.map((row) =>
      changed[row.ID] ? { ...row, ...changed[row.ID] } : row
    );
    setRows(changedRows);
  };

  return (
    <>
      <Box m={2}>
        <Paper elevation={3}>
          <Box p={2}>
            <Tasks />
          </Box>
        </Paper>
      </Box>

      <Box m={2}>
        <Paper elevation={3}>
          <Grid
            rows={rows}
            columns={columns}
            rootComponent={(props) => <Grid.Root {...props} />}
          >
            <RowDetailState defaultExpandedRowIds={[1]} />
            <EditingState
              defaultEditingRowIds={[1]}
              onCommitChanges={commitChanges}
            />
            <Table />
            <TableHeaderRow />
            <TableRowDetail
              contentComponent={DetailContent}
              cellComponent={DetailCell}
              toggleCellComponent={ToggleCell}
            />
            <DetailEditCell />
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default App;
