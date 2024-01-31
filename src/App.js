import { Toaster } from "react-hot-toast";
import "./styles/utility.style.css";
import "./styles/details-page.style.css";
import "./styles/typography.style.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
