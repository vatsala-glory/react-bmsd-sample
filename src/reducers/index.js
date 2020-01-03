// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import count from "./counter";
import reducers from "./form";
// import secondCounter from './exampleReducer';

export default combineReducers({count:count, form: reducers });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
