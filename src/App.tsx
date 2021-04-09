import { Box, Paper } from "@material-ui/core";
import React from "react";
import "./App.css";
import { CustomDetail } from "./CustomDetail";

function App() {
  return (
    <>
      {/* <Box m={2}>
        <Paper elevation={3}>
          <Box p={2}>
            <Tasks />
          </Box>
        </Paper>
      </Box> */}

      <Box m={2}>
        <Paper elevation={3}>
          <CustomDetail />
        </Paper>
      </Box>

      {/* <Box m={2}>
        <Paper elevation={3}>
          <EditingDetail />
        </Paper>
      </Box> */}
    </>
  );
}

export default App;
