import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Add, Delete } from "@mui/icons-material";
import { setRows } from "./sliceRows";
import { useAppDispatch, useAppSelector, selectRows } from "../store/hooks";
import { v4 as uuid } from "uuid";

const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const Table = () => {
  const rows = useAppSelector(selectRows);
  const dispatch = useAppDispatch();
  const [idsSelected, setIdsSelected] = useState<GridSelectionModel>([]);

  const handleAddButton = () => {
    const firstName = prompt("nombre?", "");
    if (!firstName) return;
    const lastName = prompt("apellido?", "");
    if (!lastName) return;
    const age = prompt("edad?", "18");
    if (!age) return;

    const row = {
      id: uuid(),
      firstName,
      lastName,
      age: parseInt(age, 10),
    };
    dispatch(setRows([row, ...rows]));
  };

  const handleEditRow = (params: GridCellEditCommitParams) => {
    console.log(params);
  };

  const handleSelectRow = (selection: GridSelectionModel) => {
    setIdsSelected(selection);
  };

  const handleDeleteButton = () => {
    const confirmDelete = confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(setRows(rows.filter((row) => !idsSelected.includes(row.id))));
    }
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
        rows={rows}
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
