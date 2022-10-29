import { ChangeEvent, FormEvent, MouseEvent } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button, Card, Popper, TextField } from "@mui/material";
import { useAppDispatch } from "@/store/hooks";
import { add } from "../thunks";
import { Fragment, useState } from "react";
import { AdminProps } from "../interfaces";

const AddButton = () => {
  const dispatch = useAppDispatch();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };
  const open = Boolean(anchor);
  const id = open ? "popper-id" : undefined;

  const [adminProps, setAdminProps] = useState<AdminProps>({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAdminProps({
      ...adminProps,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(add(adminProps));
    setAnchor(null);
  };

  return (
    <Fragment>
      <Button
        startIcon={<Add />}
        className="button button-text"
        aria-describedby={id}
        onClick={handleClick}
      >
        add
      </Button>
      <Popper open={open} anchorEl={anchor} id={id} placement="bottom-start">
        <Card variant="outlined">
          <Box
            component="form"
            p={2}
            sx={{
              backgroundColor: "white",
            }}
            onSubmit={handleSubmit}
          >
            <Box
              display={"flex"}
              flexDirection={{
                xs: "column",
                md: "row",
              }}
              mb={2}
              width={{
                xs: "250px",
                md: "650px",
              }}
              justifyContent="space-between"
            >
              <TextField
                margin="dense"
                size="small"
                label="Nombre"
                name="nombre"
                required
                type={"text"}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                size="small"
                label="Apellido"
                name="apellido"
                required
                type={"text"}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                size="small"
                label="Correo electronico"
                name="email"
                required
                type={"email"}
                onChange={handleChange}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              size="small"
              className="button contained"
            >
              ADD
            </Button>
          </Box>
        </Card>
      </Popper>
    </Fragment>
  );
};

export default AddButton;
