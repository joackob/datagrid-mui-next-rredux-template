import type { NextPage } from "next";
import { useAppDispatch } from "@/src/store/hooks";
import { setAdmins } from "@/src/admins/slices/sliceAdmins";
import AdminsTable from "@/src/admins/AdminsTable";
import { useEffect } from "react";

const Index: NextPage = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setAdmins());
  });
  return <AdminsTable />;
};

export default Index;
