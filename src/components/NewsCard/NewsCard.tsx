import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Heading from "../UI/Heading";
import Paragraph from "../UI/Paragraph";

import { useAppDispatch } from "../../store";
import { deleteNews } from "../../store/slices/newsSlice";

import { NewsItem } from "../../interfaces/newsInterface";

const NewsCard: React.FC<NewsItem> = ({ userId, id, title, body }) => {
  const dispatch = useAppDispatch();

  const onNewsDelete = () => {
    dispatch(deleteNews(id));
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        mb: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Heading
          kind="h3"
          text={title}
        />
        <Paragraph text={body} />
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button
          size="medium"
          onClick={onNewsDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
