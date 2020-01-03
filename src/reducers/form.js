import { GET_FORM_VALUE, UPDATE_FORM_VALUE } from "../constants/ActionTypes";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

const reducers = {form: formReducer};
export default reducers;
// export default function reducer(state = 0, action) {
//   switch (action.type) {
//   case GET_FORM_VALUE: 
//     return state;
//   case UPDATE_FORM_VALUE:
//     return state = state;
 
//   }

//   return state;
// }