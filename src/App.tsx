import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./global.css";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
export function App() {
  return (
    <div>
      <HelmetProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
          <Helmet titleTemplate="%s | pizza.shop" />
          <RouterProvider router={router} />
          <Toaster richColors />
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
}
