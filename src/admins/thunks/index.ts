import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminProps } from "../interfaces";
import { getAdmins, postAdmin } from "../service";

export const add = createAsyncThunk(
  "admin/post",
  async (data: AdminProps) => await postAdmin(data)
);

export const set = createAsyncThunk(
  "admins/get",
  async () => await getAdmins()
);
