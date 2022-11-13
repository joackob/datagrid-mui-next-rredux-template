import axios from "axios";
import { api } from "./api";
import { AdminProps } from "../interfaces";

export const postAdmin = async (data: AdminProps) => {
  const res = await axios.post(api.admin, data);
  return {
    ...data,
    id: res.data.id,
    url: res.data.url,
  };
};

export const getAdmins = async () => {
  const res = await axios.get(api.admins);
  return res.data;
};
