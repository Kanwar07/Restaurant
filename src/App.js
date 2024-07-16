import "./App.css";
import Context from "./context/Context";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Menu />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
