import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { FormEvent } from "react";
import { useContext } from "react";
import { FormAddContext } from "./FormAddProvider";

const FormAdd = () => {
  const { closeForm } = useContext(FormAddContext);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeForm();
    console.log(event);
  };

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      maxWidth={"md"}
      p={4}
      sx={{
        backgroundColor: "white",
      }}
      onSubmit={handleSubmit}
      component={"form"}
    >
      <TextField
        margin="normal"
        required
        type="text"
        id="firstname"
        label="First Name"
      />
      <TextField
        margin="normal"
        required
        type="text"
        id="lastname"
        label="Last Name"
      />
      <TextField margin="normal" required type="number" id="age" label="Age" />
      <Button
        variant="contained"
        className="button contained"
        startIcon={<Add />}
      />
    </Box>
  );
};

export default FormAdd;
