import { FC } from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useTranslation } from "react-i18next";
import { Routes } from "../../../../interfaces/routesInterface";

const NavBar: FC<Routes> = ({ routes }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        marginLeft: "auto",
        height: "64px",
      }}
    >
      {routes.map((route) => (
        <Button
          key={route}
          sx={{
            position: "relative",
            color: "white",
            display: "block",
            height: "100%",
            p: 0,
          }}
        >
          <NavLink
            className={({ isActive }) =>
              ["navlink", isActive ? "navlink_active" : null]
                .filter(Boolean)
                .join(" ")
            }
            to={route === "home" ? "/" : `/${route}`}
          >
            {t(route)}
          </NavLink>
        </Button>
      ))}
    </Box>
  );
};

export default NavBar;
