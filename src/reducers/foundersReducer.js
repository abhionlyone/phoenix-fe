import * as CONSTANTS from "../actions/types";

export function fetchFounders(state = [], action) {
  switch (action.type) {
    case CONSTANTS.FETCH_FOUNDERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
