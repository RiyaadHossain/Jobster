import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./style/utility.style.css";
import "./style/details-page.style.css";
import "./style/typography.style.css";

function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
