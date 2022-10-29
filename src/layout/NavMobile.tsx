import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Divider,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { MouseEvent } from "react";
import IconNavbar from "../components/IconNavbar";

const NavMobile = () => {
  return (
    <AppBar sx={{ backgroundColor: "var(--color-primario)" }}>
      <Container>
        <Toolbar>
          <Link href="/" flexGrow={1} underline="none" color="inherit">
            <IconNavbar withBorder versionSimple={false} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavMobile;
