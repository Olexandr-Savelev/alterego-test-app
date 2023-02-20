import { FormEvent, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Heading from "../components/UI/Heading";
import { useAppDispatch, useSelector } from "../store";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const { isAuthorized, error } = useSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) navigate("/profile");
  }, [isAuthorized]);
  console.log(isAuthorized, error);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login({ userName, password }));
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => onFormSubmit(e)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        m: "auto",
        gap: 2,
        width: { sx: "100%", md: "80%" },
      }}
      noValidate={false}
      autoComplete="off"
    >
      <Heading
        kind="h1"
        text="Login"
      />
      <TextField
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        id="filled-basic"
        label="User Name"
        variant="filled"
        required
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="filled-basic"
        label="Password"
        variant="filled"
        required
      />
      {error && <Alert severity="error">{error}</Alert>}
      <Button
        type="submit"
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
