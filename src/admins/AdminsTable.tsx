import { Container } from "@mui/material";
import { AddButton, DeleteButton, Table } from "./components";

const AdminsTable = () => {
  return (
    <Container sx={{ my: 2 }}>
      <AddButton />
      <DeleteButton />
      <Table />
    </Container>
  );
};

export default AdminsTable;
