import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../../store/hooks";
import { rows } from "../slices/sliceRows";

const AddButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const firstName = prompt("nombre?");
    if (!firstName) return;
    const lastName = prompt("apellido?");
    if (!lastName) return;
    const age = prompt("edad?", "18");
    if (!age) return;

    const row = {
      id: uuid(),
      firstName,
      lastName,
      age: parseInt(age, 10),
    };
    dispatch(rows.add(row));
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
