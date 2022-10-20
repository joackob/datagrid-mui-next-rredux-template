import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "@/store/hooks";
import { admins } from "../slices/sliceAdmins";

const AddButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const nombre = prompt("nombre?");
    if (!nombre) return;
    const apellido = prompt("apellido?");
    if (!apellido) return;
    const email = prompt("email?");
    if (!email) return;

    const admin = {
      id: uuid(),
      nombre,
      apellido,
      email,
    };
    dispatch(admins.add(admin));
  };

  return (
    <Button
      startIcon={<Add />}
      className="button button-text"
      onClick={handleClick}
    >
      add
    </Button>
  );
};

export default AddButton;
