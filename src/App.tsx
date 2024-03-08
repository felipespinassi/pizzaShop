import { RouterProvider } from "react-router-dom";
import "./global.css";
import { router } from "./routes";
export function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RouterProvider router={router} />
    </div>
  );
}
