import {
  FETCH_CASE,
  FETCH_CASE_FAILURE,
  FETCH_CASE_SUCCESS,
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
  SET_IS_CONNECTED
} from "../ActionNames";
import ApiHelper from "../../ApiHelper";
import { getCaseFromJson, showSnackBar } from "../../Utils";

export const fetchCase = id => dispatch => {
  dispatch(_fetchCase());
  ApiHelper.getCase(id).then(res => {
    if (res && res.success) {
      dispatch(_fetchCaseSuccess(getCaseFromJson(res.data)));
      dispatch(fetchHistory(id));
    } else dispatch(_fetchCaseFailure());
  });
};

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

export const setIsConnected = isConnected => dispatch => {
  dispatch(_setIsConnected(isConnected));
  showSnackBar(isConnected);
};

function _setIsConnected(isConnected) {
  return { type: SET_IS_CONNECTED, isConnected };
}

export const fetchHistory = id => dispatch => {
  dispatch(_fetchHistory());
  ApiHelper.getHistory(id).then(res => {
    res && res.success
      ? dispatch(_fetchHistorySuccess(id, res.data))
      : dispatch(_fetchHistoryFailure());
  });
};

function _fetchHistory() {
  return {
    type: FETCH_HISTORY
  };
}
function _fetchHistorySuccess(id, data) {
  return { type: FETCH_HISTORY_SUCCESS, id, history: data };
}

function _fetchHistoryFailure() {
  return {
    type: FETCH_HISTORY_FAILURE
  };
}
