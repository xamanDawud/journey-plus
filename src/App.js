import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div class="app-div">
      <RouterProvider router={routes}></RouterProvider>
      <Home></Home>
    </div>
  );
}

export default App;
