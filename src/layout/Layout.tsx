import Head from "next/head";
import { Fragment, ReactNode } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { Box, Stack } from "@mui/material";
import {
  AppRegistration,
  Login,
  MonetizationOn,
  Web,
} from "@mui/icons-material";

const linksLeft = [
  {
    label: "Plantillas",
    href: "/plantillas",
    icon: <Web />,
  },
  {
    label: "Precios",
    href: "/precios",
    icon: <MonetizationOn />,
  },
];

const linksRight = [
  {
    label: "Iniciar sesión",
    href: "/login",
    icon: <Login />,
  },
  {
    label: "Registrarse",
    href: "/register",
    icon: <AppRegistration />,
  },
];

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#7e56c1" />
        <meta name="theme-color" content="#ffffff" />
        <title>DataGrid con Material UI</title>
        <meta name="description" content="DataGrid con Material UI" />
      </Head>

      <Box display={"flex"} flexDirection="column" minHeight="100vh">
        <Box
          display={{
            xs: "none",
            md: "block",
          }}
        >
          <NavDesktop linksLeft={linksLeft} linksRight={linksRight} />
        </Box>

        <Box
          display={{
            xs: "block",
            md: "none",
          }}
        >
          <NavMobile linksLeft={linksLeft} linksRight={linksRight} />
        </Box>

        <Box flexGrow={1}>{children}</Box>
        <Box height={"8vh"} className="background-dark" />
      </Box>
    </Fragment>
  );
};

export default Layout;
