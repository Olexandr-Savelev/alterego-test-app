import { useState, FC } from "react";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { Routes } from "../../../../interfaces/routesInterface";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MobileMenu: FC<Routes> = ({ routes }) => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        marginLeft: "auto",
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {routes.map((route) => (
          <MenuItem
            key={route}
            onClick={handleCloseNavMenu}
            sx={{
              textTransform: "capitalize",
              width: "300px",
            }}
          >
            <Typography
              textAlign="center"
              sx={{ width: "100%", fontWeight: 700, fontSize: "1.3rem" }}
            >
              <Link to={route === "home" ? "/" : `/${route}`}>{t(route)}</Link>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileMenu;
