
import { GET_HELP, GET_RESULT } from "../constants/ActionTypes";

export function getHelp(payload) {
  return {
    type: GET_HELP,
    payload: payload
  };
}

export function getResult(payload) {
  return {
    type: GET_RESULT,
    payload: payload
  };
}