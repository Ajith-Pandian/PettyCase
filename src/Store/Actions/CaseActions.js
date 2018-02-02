import {
  FETCH_CASE,
  FETCH_CASE_FAILURE,
  FETCH_CASE_SUCCESS,
  SET_IS_CONNECTED
} from "../ActionNames";
import ApiHelper from "../../ApiHelper";
import { getCaseFromJson } from "../../Utils";

export const fetchCase = id => dispatch => {
  dispatch(_fetchCase());
  ApiHelper.getCase(id).then(res => {
    res && res.success
      ? dispatch(_fetchCaseSuccess(res.data))
      : dispatch(_fetchCaseFailure());
  });
};

export const setIsConnected = isConnected => dispatch =>
  dispatch(_setIsConnected(isConnected));

function _fetchCase() {
  return {
    type: FETCH_CASE
  };
}
function _fetchCaseSuccess(data) {
  return { type: FETCH_CASE_SUCCESS, case: data };
}

function _fetchCaseFailure() {
  return {
    type: FETCH_CASE_FAILURE
  };
}

function _setIsConnected(isConnected) {
  return { type: SET_IS_CONNECTED, isConnected };
}
