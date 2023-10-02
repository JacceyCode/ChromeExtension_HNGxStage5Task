import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
// import Videos from "./pages/Videos";
import Recording from "./pages/Recording";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/videos",
      //   element: <Videos />,
      //   errorElement: <Error />,
      // },
      {
        path: "/recording",
        element: <Recording />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
