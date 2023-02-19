import { FC } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Routes } from "../../../../interfaces/routesInterface";
import { useTranslation } from "react-i18next";

const NavBar: FC<Routes> = ({ routes }) => {
  const { t, i18n } = useTranslation();
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
            "&::before": {
              transition: "all 0.3s",
              position: "absolute",
              opacity: "0",
              content: '""',
              display: "block",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "2px",
              backgroundColor: "#fff",
            },
            "&:hover": {
              "&::before": {
                opacity: "1",
              },
            },
          }}
        >
          <Link to={route === "home" ? "/" : `/${route}`}>{t(route)}</Link>
        </Button>
      ))}
    </Box>
  );
};

export default NavBar;
