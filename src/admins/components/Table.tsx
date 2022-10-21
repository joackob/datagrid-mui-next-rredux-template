import React from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { adminsSelector, useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAdmins } from "../slices/sliceAdminsSelected";

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
  const dispatch = useAppDispatch();
  const admins = useAppSelector(adminsSelector.selectAll);

  const handleEditRow = (params: GridCellEditCommitParams) => {
    console.log(params);
  };

  const handleSelectRow = (selection: GridSelectionModel) => {
    dispatch(selectAdmins(selection as string[]));
  };

  return (
    <>
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

export default Table;
