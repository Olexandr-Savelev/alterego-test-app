import { FC } from "react";
import Typography from "@mui/material/Typography";

interface HeadingProps {
  text: string;
  kind: "h1" | "h2" | "h3";
}

const Heading: FC<HeadingProps> = ({ text, kind }) => {
  switch (kind) {
    case "h1":
      return (
        <Typography
          variant="h1"
          noWrap
          sx={{
            my: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: "42px",
            letterSpacing: ".1rem",
            color: "inherit",
          }}
        >
          {text}
        </Typography>
      );
    case "h2":
      return (
        <Typography
          variant="h2"
          noWrap
          sx={{
            my: 1,
            fontFamily: "monospace",
            fontSize: "24px",
            color: "inherit",
          }}
        >
          {text}
        </Typography>
      );
    case "h3":
      return (
        <Typography
          variant="h3"
          sx={{
            my: 1,
            fontFamily: "monospace",
            fontSize: "20px",
            color: "inherit",
          }}
        >
          {text}
        </Typography>
      );
  }
};

export default Heading;
