import type { NextPage } from "next";
import axios from "axios";
import { Admin } from "@/src/admins/slices/sliceAdmins";
import { useAppDispatch } from "@/src/store/hooks";
import { admins } from "@/src/admins/slices/sliceAdmins";
import AdminsTable from "@/src/admins/AdminsTable";

interface PropsNextPage {
  admins: Admin[];
}

const Index: NextPage<PropsNextPage> = (props) => {
  const dispatch = useAppDispatch();
  dispatch(admins.setAll(props.admins));

  return <AdminsTable />;
};

export const getServerSideProps = async () => {
  // api in https://github.com/joackob/apirest-next-typeorm-template
  const apiurl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api";
  const res = await axios.get(`${apiurl}/administradores`);
  const admins = res.status === 200 ? res.data : [];
  return {
    props: {
      admins,
    },
  };
};

export default Index;
