import { ChangeEvent, FormEvent, MouseEvent, useRef } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button, Card, Popper, TextField } from "@mui/material";
import { useAppDispatch } from "@/store/hooks";
import { add } from "../thunks";
import { Fragment, useState } from "react";
import { AdminProps } from "../interfaces";

const AddButton = () => {
  const dispatch = useAppDispatch();
  const [element, setElement] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setElement(element ? null : event.currentTarget);
  };
  const formOpen = Boolean(element);
  const id = formOpen ? "popper-id" : undefined;

  const nameRef = useRef<HTMLInputElement>();
  const lastnameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nombre = nameRef.current?.value || "";
    const apellido = lastnameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    dispatch(add({ nombre, apellido, email }));
    setElement(null);
  };

  return (
    <Box display={"inline"} sx={{ color: "var(--color-primario)" }}>
      <Button
        startIcon={<Add />}
        color="inherit"
        aria-describedby={id}
        onClick={handleClick}
      >
        add
      </Button>
      <Popper
        open={formOpen}
        anchorEl={element}
        id={id}
        placement="bottom-start"
      >
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
                inputRef={nameRef}
              />
              <TextField
                margin="dense"
                size="small"
                label="Apellido"
                name="apellido"
                required
                type={"text"}
                inputRef={lastnameRef}
              />
              <TextField
                margin="dense"
                size="small"
                label="Correo electronico"
                name="email"
                required
                type={"email"}
                inputRef={emailRef}
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
    </Box>
  );
};

export default AddButton;
