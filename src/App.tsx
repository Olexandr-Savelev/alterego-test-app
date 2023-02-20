import PageLayout from "./components/PageLayout/PageLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import News from "./routes/News";
import Profile from "./routes/Profile";
import "./i18n";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
