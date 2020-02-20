import * as CONSTANTS from "../actions/types";

export function fetchCompanies(
  state = { pagination: {}, companies: [] },
  action
) {
  switch (action.type) {
    case CONSTANTS.FETCH_COMPANIES_SUCCESS:
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export function fetchCompany(state = {}, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_COMPANY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
