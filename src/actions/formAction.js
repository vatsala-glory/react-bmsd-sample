import {GET_FORM_VALUE, UPDATE_FORM_VALUE} from "../constants/ActionTypes";

export function getFormValue(payload) {
    return {
      type: GET_FORM_VALUE,
      payload: payload
    };
  }
  
  export function updateFormValue(payload) {
    return {
      type: UPDATE_FORM_VALUE,
      payload: payload
    };
  }