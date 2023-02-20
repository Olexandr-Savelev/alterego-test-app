import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthorized: boolean;
  error: string | null;
}

const initialState: AuthState = { isAuthorized: false, error: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (
        action.payload.userName === "admin" &&
        action.payload.password === "12345"
      ) {
        state.isAuthorized = true;
        state.error = null;
      } else {
        state.error = "Wrong username or password!";
      }
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
