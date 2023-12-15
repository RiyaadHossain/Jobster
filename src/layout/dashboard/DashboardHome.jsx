import { ENUM_USER_ROLE } from "../../enum/userRole";
import CandidateDashboard from "../../pages/dashboard/candidate/candidate-dashboard/CandidateDashboard";
import CompanyDashbaord from "../../pages/dashboard/company/company-dashboard/CompanyDashbaord";

export default function DashboardHome() {
  const role = ENUM_USER_ROLE.company;

  if (role === ENUM_USER_ROLE.candidate) return <CandidateDashboard />;
  else return <CompanyDashbaord />;
}
