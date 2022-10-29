import React from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Alert, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { StatusStateAdmins } from "../interfaces";
import { select } from "../slices";

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
    minWidth: 200,
  },
];

const Table = () => {
  const admins = useAppSelector((state) => state.admins.values);
  const status = useAppSelector((state) => state.admins.status);
  const dispatch = useAppDispatch();

  const handleEditRow = (params: GridCellEditCommitParams) => {
    console.log(params);
  };

  const handleSelectRow = (selection: GridSelectionModel) => {
    dispatch(select(selection as number[]));
  };

  return (
    <>
      {status === StatusStateAdmins.loading && <CustomLinearProgress />}
      {status === StatusStateAdmins.error && <CustomAlert />}
      <DataGrid
        rows={admins}
        columns={columns}
        autoHeight
        checkboxSelection
        density="comfortable"
        onCellEditCommit={handleEditRow}
        onSelectionModelChange={handleSelectRow}
      />
    </>
  );
};

const CustomLinearProgress = () => (
  <Box sx={{ color: "var(--color-primario)" }}>
    <LinearProgress color="inherit" />
  </Box>
);

const CustomAlert = () => (
  <Alert severity="error">Ups, algo no fue del todo bien!!!</Alert>
);

export default Table;
