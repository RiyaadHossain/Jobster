import { ENUM_USER_ROLE } from "../enums/userRole";

export const pluralRole = (role) => {
  if (role === ENUM_USER_ROLE.candidate) return "candidates";
  if (role === ENUM_USER_ROLE.company) return "companies";

  return "";
};
