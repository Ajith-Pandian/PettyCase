import {
  FETCH_CASE,
  FETCH_CASE_FAILURE,
  FETCH_CASE_SUCCESS,
  SET_IS_CONNECTED
} from "../ActionNames";

import Case from "../../Model/Case";

const initialState = {
  cases: [],
  isConnected: false,
  isLoading: false,
  isSuccess: false,
  isError: false
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
    case SET_IS_CONNECTED: {
      return { ...state, isConnected: action.isConnected };
    }
    default:
      return state;
  }
}
