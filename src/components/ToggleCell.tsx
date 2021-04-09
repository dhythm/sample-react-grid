import { IconButton, TableCell } from "@material-ui/core";
import { Cancel, Edit } from "@material-ui/icons";

export const ToggleCell = (props: any) => {
  console.log({ name: "ToggleCell", props });
  const { expanded, onToggle, ...restProps } = props;
  const handleClick = (e: any) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <TableCell {...restProps}>
      <IconButton onClick={handleClick}>
        {expanded ? <Cancel /> : <Edit />}
      </IconButton>
    </TableCell>
  );
};
