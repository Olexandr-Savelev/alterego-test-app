import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageLayout from "./components/PageLayout/PageLayout";

import Home from "./routes/Home";
import News from "./routes/News";
import Profile from "./routes/Profile";
import Login from "./routes/Login";

import "./i18n";

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
  return <RouterProvider router={router} />;
}

export default App;
