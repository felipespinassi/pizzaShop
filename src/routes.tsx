import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/app/dashboard";
import Signin from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import SignUp from "./pages/auth/sign-up";
import Orders from "./pages/app/orders/orders";

export const router = createBrowserRouter([
  // { path: "/", element: <Dashboard /> },
  // { path: "/sign-in", element: <Signin /> },

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
