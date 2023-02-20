import { FC } from "react";

import { Box } from "@mui/system";

import Heading from "../components/UI/Heading";
import Paragraph from "../components/UI/Paragraph";

const Home: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading
        kind="h1"
        text="Home Page"
      />
      <Paragraph
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae officia quidem tempore deserunt, veniam ut quas, eligendi magnam autem, libero tenetur sed eius ad sequi at beatae quibusdam quia? Voluptas, soluta magni? Explicabo modi dicta reiciendis. Consequuntur, explicabo. Laudantium quibusdam distinctio corrupti? Aspernatur quasi ex iusto numquam aut, cumque qui repellat adipisci vero praesentium accusantium nulla exercitationem tenetur eligendi soluta quae corporis atque sapiente aliquam eius quas. Aspernatur amet enim provident, adipisci consequuntur illum alias nulla eveniet minus ut. Deserunt blanditiis repellat porro architecto, voluptas, perspiciatis dolorem et voluptatem nesciunt rem asperiores sapiente debitis saepe in magni itaque culpa fugit commodi illo similique quidem quia. Minima, voluptatibus. Voluptas hic perferendis libero, ducimus dolores placeat at atque ratione ea aliquam unde doloremque odit? Ut unde mollitia voluptatibus vel recusandae, impedit ab facilis tenetur culpa natus, at dolorum odio dolore voluptate quia dolores reprehenderit sit fuga optio repellendus libero beatae reiciendis. Doloremque!"
        }
      />
    </Box>
  );
};

export default Home;
