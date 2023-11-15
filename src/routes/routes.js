import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/Register/AccountCreator";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/Job/JobDetails";
import Jobs from "../pages/Job/Jobs";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../pages/Dashboard/employee/AddJob";
import AppliedJob from "../pages/Dashboard/candidate/AppliedJob";
import MyJobs from "../pages/Dashboard/employee/MyJobs";
import DashboardHome from "../layout/dashboard/DashboardHome";
import Applications from "../pages/Applications/Applications";
import ApplicantDetails from "../pages/Dashboard/candidate/ApplicantDetails";
import MyProfile from "../pages/Dashboard/candidate/MyProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/applications/:id",
        element: <Applications />,
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/applicant-details/:email",
        element: (
          <PrivateRoute>
            <ApplicantDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/:email/:role",
        element: <DashboardHome />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "my-jobs/:email",
        element: <MyJobs />,
      },
      {
        path: "applied-job/:email",
        element: <AppliedJob />,
      },
      {
        path: "my-profile/:email",
        element: <MyProfile />,
      },
    ],
  },
]);

export default routes;
