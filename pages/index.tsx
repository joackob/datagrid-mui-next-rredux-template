import type { NextPage } from "next";
import axios from "axios";
import { Admin, SliceAdmin } from "@/src/admins/slices/sliceAdmins";
import { useAppDispatch } from "@/src/store/hooks";
import { admins } from "@/src/admins/slices/sliceAdmins";
import AdminsTable from "@/src/admins/AdminsTable";

type PropsNextPage = SliceAdmin;

const Index: NextPage<PropsNextPage> = (props) => {
  const dispatch = useAppDispatch();
  dispatch(admins.set(props));
  return <AdminsTable />;
};

export const getServerSideProps = async () => {
  // api in https://github.com/joackob/apirest-next-typeorm-template
  const apiUrl = process.env.APIURL ?? "http://localhost:3000/api";
  const res = await axios.get(`${apiUrl}/administradores`);
  const admins = res.status === 200 ? res.data : [];
  return {
    props: {
      data: admins,
      apiUrlAdmin: `${apiUrl}/administrador`,
      apiUrlAdmins: `${apiUrl}/administradores`,
    },
  };
};

export default Index;
