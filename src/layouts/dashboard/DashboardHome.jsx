import { ENUM_USER_ROLE } from "@/enums/userRole";
import CandidateDashboard from "@/pages/dashboard/candidate/candidate-dashboard/CandidateDashboard";
import CompanyDashbaord from "@/pages/dashboard/company/company-dashboard/CompanyDashbaord";

export default function DashboardHome() {
  const role = ENUM_USER_ROLE.candidate;

  if (role === ENUM_USER_ROLE.candidate) return <CandidateDashboard />;
  else return <CompanyDashbaord />;
}
