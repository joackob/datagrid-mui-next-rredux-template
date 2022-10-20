import { Container } from "@mui/material";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import Table from "./components/Table";

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
