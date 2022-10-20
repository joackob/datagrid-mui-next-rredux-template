import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  selectAdminsSelected,
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { admins } from "../slices/sliceAdmins";

const DeleteButton = () => {
  const dispatch = useAppDispatch();
  const adminsSelected = useAppSelector(selectAdminsSelected);

  const handleClick = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(admins.deleteMany(adminsSelected));
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
