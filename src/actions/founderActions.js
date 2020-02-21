import API from "../utils/API";
import * as CONSTANTS from "./types";
import * as Toast from "../utils/toastMessage";

export const fetchFoundersSuccess = founders => {
  return {
    type: CONSTANTS.FETCH_FOUNDERS_SUCCESS,
    payload: founders
  };
};

export const fetchFounders = (companyId, callback) => {
  return dispatch => {
    return API.get(`/companies/${companyId}/founders`)
      .then(response => {
        let action = fetchFoundersSuccess(response.data);
        dispatch(action);
      })
      .catch(error => {
        throw error;
      });
  };
};


export const createFounder = (data, callback) => {
    return dispatch => {
      return API.post(`/companies/${data.company_id}/founders`, data)
        .then(response => {
          Toast.successMessage(
            "Success...",
            `Successfully added ${data.name} as a founder...`
          );
          callback();
        })
        .catch(error => {
          Toast.errorMessage("Something went wrong...", "Please contact support");
          throw error;
        });
    };
};