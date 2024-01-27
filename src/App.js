import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./styles/utility.style.css";
import "./styles/details-page.style.css";
import "./styles/typography.style.css";

function App() {
  return (
    <div >
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
