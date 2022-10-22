import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { add } from "../slices/sliceEntity";

const AddButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const firstName = prompt("nombre?");
    if (!firstName) return;
    const lastName = prompt("apellido?");
    if (!lastName) return;
    const age = prompt("edad?", "18");
    if (!age) return;

    const data = {
      firstName,
      lastName,
      age: parseInt(age, 10),
    };
    dispatch(add(data));
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
