import API from "../utils/API"
import * as CONSTANTS from './types'
import * as Toast from '../utils/toastMessage'

export const fetchCompaniesSuccess = companies => {
  return {
    type: CONSTANTS.FETCH_COMPANIES_SUCCESS,
    payload: companies
  };
};

export const fetchCompanies = (page=1) => {
  return dispatch => {
    return API.get(`/companies?page=${page}`)
      .then(response => {
        let action = fetchCompaniesSuccess(response.data)
        dispatch(action);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchCompanySuccess = company => {
  return {
    type: CONSTANTS.FETCH_COMPANY_SUCCESS,
    payload: company
  };
}

export const fetchCompany = (id) => {
  return dispatch => {
    return API.get(`/companies/${id}`)
      .then(response => {
        let action = fetchCompanySuccess(response.data)
        dispatch(action);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const updateCompany = (id, data) => {
  return dispatch => {
    return API.patch(`/companies/${id}`, data)
      .then(response => {
        Toast.successMessage('Success...', `Successfully updated ${data.company_name}`)
        return response.data
      })
      .catch(error => {
        Toast.errorMessage('Something went wrong...', 'Please contact support')
        throw error;
      });
  };
};

export const addCompany = (data) => {
  return dispatch => {
    return API.post('/companies/', data)
      .then(response => {
        Toast.successMessage('Success...', `Successfully created ${data.company_name}`)
        return response.data
      })
      .catch(error => {
        Toast.errorMessage('Something went wrong...', 'Please contact support')
        throw error;
      });
  };
};
