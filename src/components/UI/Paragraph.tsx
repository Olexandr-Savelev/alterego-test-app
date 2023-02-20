import { FC } from "react";

import Typography from "@mui/material/Typography";

interface TypographyProps {
  text: string;
}

const Paragraph: FC<TypographyProps> = ({ text }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: "16px",
        color: "inherit",
      }}
    >
      {text}
    </Typography>
  );
};

export default Paragraph;
