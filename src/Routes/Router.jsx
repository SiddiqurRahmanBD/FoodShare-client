
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AvailableFoods from "../Pages/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import { createBrowserRouter } from "react-router";
import FoodDetails from "../Pages/FoodDetails";
import FoodRequest from "../Pages/FoodRequest";
import ErrorPage from "../Pages/ErrorPage";
import UpdateFood from "../Pages/UpdateFood";
import ManageFood from "../Pages/ManageFood";
import AddFood from "../Pages/AddFood";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/available-foods",
        Component: AvailableFoods,
      },

      {
        path: "/food-details/:id",
        element: <FoodDetails />,
      },
      {
        path: "/update-food/:id",
        Component: UpdateFood,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "manage-my-foods",
        Component: ManageFood,
      },
      {
        path: "add-food",
        Component: AddFood,
      },
      {
        path: "my-food-requests",
        Component: FoodRequest,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
]);
export default router;
