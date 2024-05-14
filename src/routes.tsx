import { createBrowserRouter } from "react-router-dom";
import Signin from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import SignUp from "./pages/auth/sign-up";
import Orders from "./pages/app/orders/orders";
import Dashboard from "./pages/app/dashboard/dashboard";

export const router = createBrowserRouter([
  // { path: "/", element: <Dashboard /> },
  // { path: "/sign-in", element: <Signin /> },

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
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
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
