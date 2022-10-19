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

const NavMobile = ({
  linksLeft,
  linksRight,
}: {
  linksLeft: { label: string; href: string; icon: ReactNode }[];
  linksRight: { label: string; href: string; icon: ReactNode }[];
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "var(--color-primario)" }}>
      <Container>
        <Toolbar>
          <Link href="/" flexGrow={1} underline="none" color="inherit">
            <IconNavbar withBorder versionSimple={false} />
          </Link>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: "white" }}
            onClick={handleClick}
          >
            <MenuIcon color="inherit" />
          </IconButton>
        </Toolbar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {linksLeft.map((link, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              href={link.href}
              underline="none"
            >
              {link.icon}
              <Typography variant="inherit" sx={{ ml: 1 }}>
                {link.label}
              </Typography>
            </MenuItem>
          ))}
          <Divider variant="middle" />
          {linksRight.map((link, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              href={link.href}
              underline="none"
            >
              {link.icon}
              <Typography variant="inherit" sx={{ ml: 1 }}>
                {link.label}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
};

export default NavMobile;
