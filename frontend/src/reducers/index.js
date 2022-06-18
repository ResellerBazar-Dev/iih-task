import { combineReducers } from "redux";
import superAdminReducer from "./superAdminReducer";
import adminReducer from "./adminReducer";
import empReducers from "./empReducers";

export default combineReducers({
  superAdminReducer: superAdminReducer,
  adminReducer: adminReducer,
  empReducers: empReducers,
});
