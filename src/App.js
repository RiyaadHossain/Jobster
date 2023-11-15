import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { getUser, /* userPersistency */ } from "./features/auth/authSlice";
import { auth } from "./firebase/firebase.config";
import routes from "./routes/routes";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email))
      }
    })
  }, [dispatch])

  return (
    <div className="px-6">
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
