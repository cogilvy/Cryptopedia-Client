import { combineReducers } from "redux";
import usersReducer from './usersReducer'
import newsReducer from './newsReducer'
import cryptoReducer from './cryptoReducer'
import simulatorReducer from './simulatorReducer'

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  newsReducer: newsReducer,
  cryptoReducer: cryptoReducer,
  simulatorReducer: simulatorReducer
});

export default rootReducer;
