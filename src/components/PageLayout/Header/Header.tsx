import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import SwitchButton from "./SwitchButton/SwitchButton";
import MobileMenu from "./MobileMenu.tsx/MobileMenu";
import NavBar from "./NavBar/NavBar";
import { Route } from "../../../interfaces/routesInterface";
import { Link } from "react-router-dom";
import { useSelector } from "../../../store";

const Header = () => {
  const { isAuthorized } = useSelector((state) => state.auth);

  const pages: Route[] = isAuthorized
    ? ["home", "news", "profile"]
    : ["home", "news", "login"];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ xs: { display: "flex", justifyContent: "space-between" } }}
        >
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <NavBar routes={pages} />
          <MobileMenu routes={pages} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: { sx: 0, md: 2 },
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <SwitchButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
