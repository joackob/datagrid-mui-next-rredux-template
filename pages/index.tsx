import type { NextPage } from "next";
import { useAppDispatch } from "@/src/store/hooks";
import { admins } from "@/src/admins/slices/sliceAdmins";
import AdminsTable from "@/src/admins/AdminsTable";
import { useEffect } from "react";

const Index: NextPage = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(admins.set());
  });
  return <AdminsTable />;
};

export default Index;
