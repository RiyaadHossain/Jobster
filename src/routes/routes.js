import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/register/AccountCreator";
import Home from "../pages/home/Home";
import JobDetails from "../pages/job/JobDetails";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../pages/dashboard/company/AddJob";
import AppliedJob from "../pages/dashboard/candidate/AppliedJob";
import MyJobs from "../pages/dashboard/company/MyJobs";
import DashboardHome from "../layout/dashboard/DashboardHome";
import ApplicantDetails from "../pages/dashboard/candidate/ApplicantDetails";
import MyProfile from "../pages/dashboard/candidate/MyProfile";
import JobListing from "../pages/job/JobListing";
import CompanyListing from "../pages/company/CompanyListing";
import CompanyDetails from "../pages/company/CompanyDetails";
import CandidateListing from "../pages/candidate/CandidateListing";
import CandidateDetails from "../pages/candidate/CandidateDetails";
import NotFound from "../components/404/NotFound";
import ContactPage from "../pages/contact/ContactPage";
import CandidateEditProfile from "../pages/dashboard/candidate/CandidateEditProfile";
import FavouriteJobs from "../pages/dashboard/candidate/FavouriteJobs";
import ChangePassword from "../pages/dashboard/common/ChangePassword";
import Inbox from "../pages/dashboard/common/Inbox";
import Notification from "../pages/dashboard/common/Notification";
import Applications from "../pages/dashboard/candidate/Applications";
import CompanyEditProfile from "../pages/dashboard/company/CompanyEditProfile";
import NewJobOffers from "../pages/dashboard/company/NewJobOffers";
import ManageJobs from "../pages/dashboard/company/ManageJobs";
import Candidates from "../pages/dashboard/company/Candidates";

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
      // {
      //   path: "/applications/:id",
      //   element: <Applications />,
      // },
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
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
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
      {
        path: "candidate/edit-profile",
        element: <CandidateEditProfile />,
      },
      {
        path: "company",
        children: [
          {
            path: "edit-profile",
            element: <CompanyEditProfile />,
          },
          {
            path: "new-job-offers",
            element: <NewJobOffers />,
          },
          {
            path: "manage-jobs",
            element: <ManageJobs />,
          },
          {
            path: "candidates",
            element: <Candidates />,
          },
        ],
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "favourite-jobs",
        element: <FavouriteJobs />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "inbox",
        element: <Inbox />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
