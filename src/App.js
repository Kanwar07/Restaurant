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
import Restaurant from "./pages/Restaurant";
import Profile from "./pages/Profile";
import Tracking from "./pages/Tracking";
import Detail from "./pages/Detail";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Restaurant />} />
        <Route path="profile" element={<Profile />} />
        <Route path="detail" element={<Detail />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="tracking" element={<Tracking />} />
      </Route>
    )
  );
  return (
    <Context>
      <Toaster position="bottom-center" toastOptions={{ duration: 1500 }} />
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
