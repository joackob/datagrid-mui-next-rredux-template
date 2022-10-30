import type { NextPage } from "next";
import { useAppDispatch } from "@/src/store/hooks";
import AdminsTable from "@/src/admins";
import { useEffect } from "react";
import { set } from "@/src/admins/thunks";

const Index: NextPage = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(set());
  });
  return <AdminsTable />;
};

export default Index;
