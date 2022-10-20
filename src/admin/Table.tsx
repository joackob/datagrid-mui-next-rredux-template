import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { Add, Delete } from "@mui/icons-material";
import { selectAllAdmins, useAppSelector } from "../store/hooks";

const columns: GridColDef[] = [
  {
    field: "nombre",
    headerName: "Nombre",
    editable: true,
  },
  {
    field: "apellido",
    headerName: "Apellido",
    editable: true,
  },
  {
    field: "email",
    headerName: "Correo Electronico",
    editable: true,
    width: 200,
  },
];

const Table = () => {
  const admins = useAppSelector(selectAllAdmins);
  const [idsSelected, setIdsSelected] = useState<GridSelectionModel>();

  const handleAddButton = () => {
    console.log("agregar admin");
  };

  const handleEditRow = (params: GridCellEditCommitParams) => {
    console.log(params);
  };

  const handleSelectRow = (idsSelected: GridSelectionModel) => {
    setIdsSelected(idsSelected);
  };

  const handleDeleteButton = () => {
    console.log(`se eliminaran los ids ${idsSelected}`);
  };

  return (
    <Container sx={{ my: 2 }}>
      <Button
        startIcon={<Add />}
        className="button button-text"
        onClick={handleAddButton}
      >
        add
      </Button>
      <Button
        startIcon={<Delete />}
        className="button button-text"
        onClick={handleDeleteButton}
      >
        delete
      </Button>

      <DataGrid
        rows={admins}
        columns={columns}
        autoHeight
        checkboxSelection
        density="comfortable"
        onCellEditCommit={handleEditRow}
        onSelectionModelChange={handleSelectRow}
      />
    </Container>
  );
};

export default Table;
