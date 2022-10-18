import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridRowId,
  GridRowParams,
  GridSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Add, Delete } from "@mui/icons-material";
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

interface IRow {
  id: string;
  lastName: string;
  firstName: string;
  age?: number;
}

const Home = () => {
  const [rowsSelect, setRowsSelect] = useState<GridRowId[]>([]);
  const [rows, setRows] = useState<IRow[]>([
    { id: uuid(), lastName: "Snow", firstName: "Jon", age: 35 },
    { id: uuid(), lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: uuid(), lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: uuid(), lastName: "Stark", firstName: "Arya", age: 16 },
    { id: uuid(), lastName: "Targaryen", firstName: "Daenerys", age: 12 },
    { id: uuid(), lastName: "Melisandre", firstName: "Casa", age: 150 },
    { id: uuid(), lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: uuid(), lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: uuid(), lastName: "Roxie", firstName: "Harvey", age: 65 },
  ]);

  const handleDeleteButton = () => {
    setRows(rows.filter((row) => !rowsSelect.includes(row.id)));
  };

  const handleAddButton = () => {
    const data: IRow = {
      id: uuid(),
      lastName: "",
      firstName: "",
    };
    setRows([data, ...rows]);
  };

  return (
    <Container>
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
        onCellEditCommit={(params: GridCellEditCommitParams) =>
          console.log(params.id, params.field, params.value)
        }
        onRowClick={(params: GridRowParams) => console.log(params)}
        onSelectionModelChange={(selectionModel: GridSelectionModel) =>
          setRowsSelect(selectionModel)
        }
      />
    </Container>
  );
};

export default Home;
