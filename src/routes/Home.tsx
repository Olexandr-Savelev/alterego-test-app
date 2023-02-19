import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        noWrap
        sx={{
          my: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
        }}
      >
        Home Page
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          color: "inherit",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam totam
        quaerat animi sequi quod aliquid! Reprehenderit odit natus modi
        consectetur placeat molestias fugit ex atque praesentium laborum
        pariatur, fuga accusamus corporis rem. Nisi dolorum reprehenderit soluta
        veritatis, ullam, repellat a, dignissimos est at explicabo facilis dicta
        beatae expedita hic. Quas neque iusto incidunt temporibus laudantium
        sint fuga obcaecati laborum officiis ad quos earum non, quia aspernatur
        maiores minima, laboriosam hic dolorem a vitae praesentium! Corporis,
        exercitationem minus delectus quibusdam perferendis sint, explicabo qui
        numquam adipisci provident quaerat reiciendis veritatis quasi sapiente
        ab ducimus ex quos voluptatum. Maxime non dolorem dicta nihil numquam
        dignissimos animi quia fugit! Quaerat perferendis aperiam unde optio in,
        accusantium explicabo iste doloribus. Ipsam maiores ad a porro ab
        laboriosam impedit temporibus optio! Nisi consequatur optio expedita
        numquam eligendi molestias molestiae quasi alias iure. Similique laborum
        quo consequuntur nihil. Perspiciatis nam culpa dolorem totam quidem
        corporis consectetur?
      </Typography>
    </Box>
  );
};

export default Home;
