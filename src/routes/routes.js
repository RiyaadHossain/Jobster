import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/register/AccountCreator";
import Home from "../pages/home/Home";
import JobDetails from "../pages/job/JobDetails";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../pages/dashboard/employee/AddJob";
import AppliedJob from "../pages/dashboard/candidate/AppliedJob";
import MyJobs from "../pages/dashboard/employee/MyJobs";
import DashboardHome from "../layout/dashboard/DashboardHome";
import Applications from "../pages/applications/Applications";
import ApplicantDetails from "../pages/dashboard/candidate/ApplicantDetails";
import MyProfile from "../pages/dashboard/candidate/MyProfile";
import JobListing from "../pages/job/JobListing";
import CompanyListing from "../pages/company/CompanyListing";
import CompanyDetails from "../pages/company/CompanyDetails";
import CandidateListing from "../pages/candidate/CandidateListing";
import CandidateDetails from "../pages/candidate/CandidateDetails";

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
        path: "/job-listing",
        element: <JobListing />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/company-listing",
        element: <CompanyListing />,
      },
      {
        path: "/companies/:id",
        element: <CompanyDetails />,
      },
      {
        path: "/candidate-listing",
        element: <CandidateListing />,
      },
      {
        path: "/candidates/:id",
        element: <CandidateDetails />,
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
