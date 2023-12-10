import { USER_ROLE } from "../../enum/userRole";
import CandidateDashboard from "../../pages/dashboard/candidate/CandidateDashboard";
import CompanyDashbaord from "../../pages/dashboard/company/CompanyDashbaord";

export default function DashboardHome() {
  const role = USER_ROLE.company;

  if (role === USER_ROLE.candidate) return <CandidateDashboard />;
  else return <CompanyDashbaord />;
}
