import { TableRowDetail } from "@devexpress/dx-react-grid-material-ui";
import React from "react";

export const DetailCell = (props: any) => {
  console.log({ props });
  const {
    children,
    changeRow,
    processValueChange,
    applyChanges,
    cancelChanges,
    ...restProps
  } = props;
  const { row } = restProps;

  return (
    <TableRowDetail.Cell {...restProps}>
      {React.cloneElement(children, {
        row,
        changeRow,
        processValueChange,
        applyChanges,
        cancelChanges,
      })}
    </TableRowDetail.Cell>
  );
};
