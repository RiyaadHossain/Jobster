import DashboardHeader from "@/components/dashboard/DashboardHeader";
import JobsterAreaChart from "@/components/dashboard/JobsterAreaChart";
import LinkWithArrow from "@/components/ui/LinkWithArrow";
import RecentApplicationsTable from "./components/RecentApplicationsTable";
import { statsData } from "@/data/stats";
import GetDashboardStats from "@/helpers/GetDashboardStats";
import { applicationData, profileVisitorData } from "@/constants/statData";
import { notificationsData } from "@/data/notifications";
import RecentNotificationRow from "./components/RecentNotificationRow";

export default function CandidateDashboard() {
  return (
    <div className="">
      <DashboardHeader title="Dashboard" subtitle="Welcome, Riyad Hossain!" />

      {/* Stats Cards */}
      <GetDashboardStats statsData={statsData} />

      {/* Info Charts */}
      <div className="mt-12 grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <JobsterAreaChart
            quantity={321}
            data={profileVisitorData}
            syncId="profile-visitor"
            color="#0070C9"
            title="Candidate's Profile Visitors"
          />
        </div>
        <div className="col-span-6">
          <JobsterAreaChart
            quantity={125}
            syncId="applications"
            data={applicationData}
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
            {/* Use 'RecentNotificationRow' Component in 'components>dashboard' folder; instead of the static design */}

            {notificationsData.map((notification, i) => (
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
