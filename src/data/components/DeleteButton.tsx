import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  selectRowsSelected,
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";
import { rows } from "../slices/sliceRows";

const DeleteButton = () => {
  const dispatch = useAppDispatch();
  const rowsSelected = useAppSelector(selectRowsSelected);

  const handleClick = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(rows.deleteMany(rowsSelected));
    }
  };
  return (
    <Button
      startIcon={<Delete />}
      className="button button-text"
      onClick={handleClick}
    >
      delete
    </Button>
  );
};

export default DeleteButton;
