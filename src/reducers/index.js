import { combineReducers } from "redux";
import { fetchCompanies, fetchCompany } from "./companiesReducer";
import { fetchFounders } from "./foundersReducer";

export default asyncReducers => {
  return combineReducers({
    companiesData: fetchCompanies,
    company: fetchCompany,
    foundersData: fetchFounders,
    ...asyncReducers
  });
};
