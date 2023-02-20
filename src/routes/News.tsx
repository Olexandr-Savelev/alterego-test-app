import { FC, useEffect, useRef } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

import NewsCard from "../components/NewsCard/NewsCard";
import Heading from "../components/UI/Heading";

import { useAppDispatch, useSelector } from "../store";
import { fetchNews } from "../store/slices/newsSlice";

const News: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const firstUpdate = useRef(true);
  const dispatch = useAppDispatch();

  const { news, status, error } = useSelector((state) => state.news);

  const handleClick = () => {
    dispatch(fetchNews(6));
  };

  useEffect(() => {
    if (news.length === 0) {
      dispatch(fetchNews(6));
    }
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (status === "idle") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [status]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "sticky",
          top: "0",
          mt: 1,
          mx: "auto",
          backgroundColor: "white",
          zIndex: "20",
        }}
      >
        <Heading
          kind={"h1"}
          text={"NEWS"}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ display: "block", mb: 1 }}
        >
          Load More
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {news.map((newsItem) => (
          <Grid
            item
            xs={0}
            sm={4}
            md={4}
            key={newsItem.id}
          >
            <NewsCard {...newsItem} />
          </Grid>
        ))}
      </Grid>
      {status === "loading" && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <div ref={ref}></div>
    </>
  );
};

export default News;
