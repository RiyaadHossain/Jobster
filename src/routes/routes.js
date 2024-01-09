import { createBrowserRouter } from "react-router-dom";

import Main from "@/layouts/main/Main";
import Home from "@/pages/home/Home";
import ContactPage from "@/pages/contact/ContactPage";
import Dashboard from "@/layouts/dashboard/Dashboard";
import DashboardHome from "@/layouts/dashboard/DashboardHome";
import NotFound from "@/components/404/NotFound";

import CandidateListing from "@/pages/candidate-listing/CandidateListing";
import CandidateDetails from "@/pages/candidate-details/CandidateDetails";

import CompanyListing from "@/pages/company-listing/CompanyListing";
import CompanyDetails from "@/pages/company-details/CompanyDetails";

import JobListing from "@/pages/job-listing/JobListing";
import JobDetails from "@/pages/job-details/JobDetails";

import Applications from "@/pages/dashboard/candidate/applications/Applications";
import FavouriteJobs from "@/pages/dashboard/candidate/favourite-jobs/FavouriteJobs";
import CandidateEditProfile from "@/pages/dashboard/candidate/candidate-edit-profile/CandidateEditProfile";

import Inbox from "@/pages/dashboard/common/inbox/Inbox";
import Notification from "@/pages/dashboard/common/notification/Notification";
import ChangePassword from "@/pages/dashboard/common/change-password/ChangePassword";

import CompanyEditProfile from "@/pages/dashboard/company/company-edit-profile/CompanyEditProfile";
import NewJobOffers from "@/pages/dashboard/company/new-job-offer/NewJobOffers";
import ManageJobs from "@/pages/dashboard/company/manage-jobs/ManageJobs";
import Candidates from "@/pages/dashboard/company/candidates/Candidates";
import EditJobOffer from "@/pages/dashboard/company/manage-jobs/edit-job-offer/EditJobOffer";
import ForgetPassword from "@/pages/reset-password/ResetPassword";

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
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFound />,
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
        path: "candidate",
        children: [
          {
            path: "edit-profile",
            element: <CandidateEditProfile />,
          },
          {
            path: "applications",
            element: <Applications />,
          },
          {
            path: "favourite-jobs",
            element: <FavouriteJobs />,
          },
        ],
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
            path: "manage-jobs/edit-job/:id",
            element: <EditJobOffer />,
          },
          {
            path: "candidates",
            element: <Candidates />,
          },
        ],
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
    path: "/reset-password/:token",
    element: <ForgetPassword />,
  },
]);

export default routes;
