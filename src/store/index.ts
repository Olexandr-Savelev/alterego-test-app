import { configureStore, Middleware } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import NewsReducer from "./slices/newsSlice";
import AuthReducer from "./slices/authSlice";

const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type === "auth/login") {
      console.log(getState().auth);
      localStorage.setItem("authState", JSON.stringify(getState().auth));
    }
    return result;
  };
};

const reHydrateAuth = () => {
  if (localStorage.getItem("authState") !== null) {
    return JSON.parse(localStorage.getItem("authState") || "{}");
  }
};

export const store = configureStore({
  reducer: {
    news: NewsReducer,
    auth: AuthReducer,
  },
  preloadedState: {
    auth: reHydrateAuth(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
