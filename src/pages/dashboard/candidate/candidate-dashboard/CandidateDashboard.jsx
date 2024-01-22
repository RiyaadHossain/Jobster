import DashboardHeader from "@/components/dashboard/DashboardHeader";
import JobsterAreaChart from "@/components/dashboard/JobsterAreaChart";
import LinkWithArrow from "@/components/ui/LinkWithArrow";
import RecentApplicationsTable from "./components/RecentApplicationsTable";
import { statsData } from "@/data/stats";
import GetDashboardStats from "@/helpers/GetDashboardStats";
import { useGetAllNotificationsQuery } from "../../../../redux/api/notification";
import RecentNotificationRow from "../../../../components/dashboard/RecentNotificationRow";
import {
  useApplicationStatQuery,
  useProfileViewStatQuery,
} from "../../../../redux/api/dashboard";

export default function CandidateDashboard() {
  const { data } = useGetAllNotificationsQuery();
  const notificationsData = data?.data?.notifications;

  const { data: applicationData } = useApplicationStatQuery();
  const { data: profileViewData } = useProfileViewStatQuery();

  const applicationStat = applicationData?.data?.stats;
  const profileViewStat = profileViewData?.data?.stats;
  const applicationCount = applicationData?.data?.total;
  const profileViewCount = profileViewData?.data?.total;

  console.log({ applicationStat, profileViewStat });

  return (
    <div className="">
      <DashboardHeader title="Dashboard" subtitle="Welcome, Riyad Hossain!" />

      {/* Stats Cards */}
      <GetDashboardStats statsData={statsData} />

      {/* Info Charts */}
      <div className="mt-12 grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <JobsterAreaChart
            quantity={profileViewCount}
            data={profileViewStat}
            dataKey="views"
            syncId="profile-visitor"
            color="#0070C9"
            title="Candidate's Profile Visitors"
          />
        </div>
        <div className="col-span-6">
          <JobsterAreaChart
            quantity={applicationCount}
            syncId="applications"
            dataKey="applications"
            data={applicationStat}
            color="#FFA823"
            title="Applications"
          />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-12 gap-7 mt-12">
        <div className="col-span-6">
          <h2 className="home_section_title">Recent Notifications</h2>
          <div>
            {notificationsData?.slice(0, 5)?.map((notification, i) => (
              <RecentNotificationRow key={i} notification={notification} />
            ))}
          </div>
          <LinkWithArrow display="Read all" link="notifications" />
        </div>
        <div className="col-span-6">
          <h2 className="home_section_title">Recent Messages</h2>
          <p className="opacity-[0.8]">No recent Messages</p>
        </div>
      </div>

      {/* Recent Job Applicaitons */}
      <div className="mt-12">
        <h2 className="home_section_title">Recent Job Applications</h2>
        <div>
          <RecentApplicationsTable />
        </div>
      </div>
    </div>
  );
}
