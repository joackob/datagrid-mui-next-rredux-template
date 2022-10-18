import React, { useContext, useState } from "react";
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
import { FormAddContext } from "../providers/FormAddProvider";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    maxWidth: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

interface IRow {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

const Home = () => {
  const { openForm } = useContext(FormAddContext);
  const [rowsSelect, setRowsSelect] = useState<GridRowId[]>([]);

  const [rows, setRows] = useState<IRow[]>([
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12 },
    { id: 6, lastName: "Melisandre", firstName: "Casa", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ]);

  const handleDeleteButton = () => {
    setRows(rows.filter((row) => !rowsSelect.includes(row.id)));
  };

  const handleAddButton = () => {
    openForm();
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
