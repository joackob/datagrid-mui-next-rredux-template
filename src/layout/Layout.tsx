import Head from "next/head";
import { Fragment, ReactNode } from "react";
import NavMobile from "./NavMobile";
import { Box, Stack } from "@mui/material";

const linksLeft: {
  label: string;
  href: string;
  icon: ReactNode;
}[] = [];

const linksRight: {
  label: string;
  href: string;
  icon: ReactNode;
}[] = [];

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
          height={{
            xs: 56,
            sm: 64,
          }}
        >
          <NavMobile linksLeft={linksLeft} linksRight={linksRight} />
        </Box>

        <Box flexGrow={1}>{children}</Box>
        <Box height={64} className="background-dark" />
      </Box>
    </Fragment>
  );
};

export default Layout;
