import { combineReducers } from "redux";
import {fetchCompanies, fetchCompany} from './companiesReducer'

export default asyncReducers => {
  return combineReducers({
    companiesData: fetchCompanies,
    company: fetchCompany,
    ...asyncReducers
  });
};
