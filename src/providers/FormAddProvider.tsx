import { Box, Modal, Stack } from "@mui/material";
import { createContext, ReactChild, ReactNode, useState } from "react";
import FormAdd from "./FormAdd";

export const FormAddContext = createContext({
  closeForm: () => {},
  openForm: () => {},
});

const FormAddProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const closeForm = () => setOpen(false);
  const openForm = () => setOpen(true);

  return (
    <FormAddContext.Provider
      value={{
        openForm,
        closeForm,
      }}
    >
      {children}
      <Modal
        open={open}
        onClose={closeForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormAdd />
      </Modal>
    </FormAddContext.Provider>
  );
};

export default FormAddProvider;
