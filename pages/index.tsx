import type { NextPage } from "next";
import axios from "axios";
import { Admin } from "@/src/admins/slices/sliceAdmins";
import { useAppDispatch } from "@/src/store/hooks";
import { admins } from "@/src/admins/slices/sliceAdmins";
import AdminsTable from "@/src/admins/AdminsTable";

interface PropsNextPage {
  apiurl: string;
  admins: Admin[];
}

const Index: NextPage<PropsNextPage> = (props) => {
  const dispatch = useAppDispatch();
  dispatch(admins.set(props.admins));
  return <AdminsTable />;
};

export const getServerSideProps = async () => {
  const apiurl = process.env.APIURL ?? "http://localhost:3000/api";
  const res = await axios.get(`${apiurl}/administradores`);
  const admins = res.status === 200 ? res.data.admins : [];
  return {
    props: {
      apiurl,
      admins,
    },
  };
};

export default Index;
