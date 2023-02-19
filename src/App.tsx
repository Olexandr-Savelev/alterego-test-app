import PageLayout from "./components/PageLayout/PageLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import News from "./routes/News";
import Profile from "./routes/Profile";
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
