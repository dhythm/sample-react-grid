import { Grid as MuiGrid, Typography } from "@material-ui/core";

export const DetailContent = (props: any) => {
  console.log({ props });
  const { row, ...rest } = props;
  const { processValueChange, applyChanges, cancelChanges } = rest;

  return (
    <MuiGrid container spacing={3}>
      <MuiGrid item xs={6}>
        <Typography>DetailContent</Typography>
      </MuiGrid>
    </MuiGrid>
  );
};
