import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewsItem } from "../../interfaces/newsInterface";

interface NewsState {
  news: NewsItem[];
  error: string | null;
  status: "loading" | "idle";
}

export const fetchNews = createAsyncThunk<NewsItem[], number>(
  "news/fetch",
  async (limit: number, { rejectWithValue, getState }) => {
    const { news } = getState() as { news: NewsState };
    const start = news.news.length;
    const end = news.news.length + limit;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`
    );
    const data: NewsItem[] = await response.json();
    if (response.status !== 200) {
      return rejectWithValue("Failed to fetch news.");
    }
    return data;
  }
);

const initialState: NewsState = {
  news: [],
  error: null,
  status: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    deleteNews: (state, action) => {
      state.news = state.news.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.news.push(...payload);
      state.status = "idle";
      state.error = null;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload as string;
      }
      state.status = "idle";
    });
  },
});

export const { deleteNews } = newsSlice.actions;
export default newsSlice.reducer;
