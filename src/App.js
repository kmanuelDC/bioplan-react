import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import  configureStore  from "./store";

function App() {
  return (
  <Provider store={configureStore}>
  <RouterProvider router={router} />
  </Provider>
  );
}
export default App;
