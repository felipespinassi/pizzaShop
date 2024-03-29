import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./global.css";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
export function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
        <Toaster richColors />
      </HelmetProvider>
    </div>
  );
}
