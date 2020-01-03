
import { GET_HELP, GET_RESULT } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case GET_HELP: 
    return state + 1;
  case GET_RESULT:
    return state - 1;
  case RESET:
    return state = action.payload;
  }

  return state;
}