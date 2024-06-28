
import Page from "./wrappers/Page"

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Chat from "./pages/Chat.tsx";

const routes = createBrowserRouter([{
  path: "/",
  element: <Home />,
}, {
  path: "/chat",
  element: <Chat />
}])

const App = () => {
  return (
    <Page>
      <RouterProvider router={routes} />
    </Page>
  )
}

export default App