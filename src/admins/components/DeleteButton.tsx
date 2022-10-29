import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { remove } from "../thunks";

const DeleteButton = () => {
  const selected = useAppSelector((state) => state.admins.selected);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) dispatch(remove(selected));
  };

  return (
    <Box display={"inline"} sx={{ color: "var(--color-primario)" }}>
      <Button
        startIcon={<Delete />}
        color="inherit"
        onClick={handleClick}
        disabled={selected.length === 0}
      >
        delete
      </Button>
    </Box>
  );
};

export default DeleteButton;
