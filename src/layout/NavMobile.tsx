import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Link } from "@mui/material";
import IconNavbar from "../components/IconNavBar";

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
