import * as CONSTANTS from "../actions/types";

export function fetchCompanies(
  state = { pagination: {}, companies: [] },
  action
) {
  switch (action.type) {
    case CONSTANTS.FETCH_COMPANIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function fetchCompany(state = {}, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_COMPANY_SUCCESS:
      return {
        ...action.payload,
        founded_date: new Date(action.payload.founded_date)
      };
    default:
      return state;
  }
}
