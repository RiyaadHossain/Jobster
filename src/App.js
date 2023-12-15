import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {

  return (
    <div className="">
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
