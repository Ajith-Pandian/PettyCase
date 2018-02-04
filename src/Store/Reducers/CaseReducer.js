import {
  FETCH_CASE,
  FETCH_CASE_FAILURE,
  FETCH_CASE_SUCCESS,
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
  SET_IS_CONNECTED
} from "../ActionNames";

import Case from "../../Model/Case";
import update from "immutability-helper";

const initialState = {
  cases: [],
  isConnected: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  //Following states are not implemented in this app
  isLoadingHistory: false,
  isSuccessHistory: false,
  isErrorHistory: false
};

export default function Cases(state = initialState, action) {
  switch (action.type) {
    case FETCH_CASE: {
      return { ...state, isLoading: true, isSuccess: false, isError: false };
    }
    case FETCH_CASE_SUCCESS: {
      return {
        ...state,
        cases: [...state.cases, action.case],
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    }
    case FETCH_CASE_FAILURE: {
      return { ...state, isLoading: false, isSuccess: false, isError: true };
    }
    case FETCH_HISTORY: {
      return {
        ...state,
        isLoadingHistory: true,
        isSuccessHistory: false,
        isErrorHistory: false
      };
    }
    case FETCH_HISTORY_SUCCESS: {
      let { id, history } = action;
      let index = state.cases.findIndex(item => item.scid === id);
      return update(state, {
        cases: {
          [index]: {
            history: { $set: history }
          }
        }
      });
    }
    case FETCH_HISTORY_FAILURE: {
      return {
        ...state,
        isLoadingHistory: false,
        isSuccessHistory: false,
        isErrorHistory: true
      };
    }
    case SET_IS_CONNECTED: {
      return { ...state, isConnected: action.isConnected };
    }
    default:
      return state;
  }
}
