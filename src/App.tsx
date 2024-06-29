import { RouterProvider, createBrowserRouter, useLocation, Outlet } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Chat from "./pages/Chat.tsx";
import Page from "./wrappers/Page";

const Layout = () => {
  const location = useLocation();
  return (
    <Page page={location.pathname === "/" ? "home" : "chat"}>
      <Outlet />
    </Page>
  );
};

const App = () => {
  const routesWithLayout = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routesWithLayout} />;
};

export default App;
