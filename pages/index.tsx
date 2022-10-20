import type { NextPage } from "next";
import Table from "../src/admin/Table";
import axios from "axios";
import { Admin } from "../src/admin/sliceAdmin";
import { useAppDispatch } from "../src/store/hooks";
import { setAdmins } from "../src/admin/sliceAdmin";

interface PropsNextPage {
  apiurl: string;
  admins: Admin[];
}

const Index: NextPage<PropsNextPage> = ({ apiurl, admins }) => {
  console.log(apiurl);
  const dispatch = useAppDispatch();
  dispatch(setAdmins(admins));
  return <Table />;
};

export const getServerSideProps = async () => {
  const apiurl = process.env.APIURL ?? "";
  console.log(apiurl);

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
