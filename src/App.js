import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <RouterProvider router={router} />;
}
export default App;
