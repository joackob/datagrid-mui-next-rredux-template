import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";

const DeleteButton = () => {
  const handleClick = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      alert("recordar implementar la función para eliminar ");
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
