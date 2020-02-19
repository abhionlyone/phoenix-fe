import { combineReducers } from "redux";
import {fetchCompanies, fetchCompany} from './companiesReducer'

export default asyncReducers => {
  return combineReducers({
    companies: fetchCompanies,
    company: fetchCompany,
    ...asyncReducers
  });
};
