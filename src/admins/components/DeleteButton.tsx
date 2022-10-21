import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { admins } from "../slices/sliceAdmins";

const DeleteButton = () => {
  const dispatch = useAppDispatch();
  const adminsSelected = useAppSelector((state) => state.adminsSelected);

  const handleClick = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(admins.removeMany(adminsSelected));
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
