import axios from "axios";

import { ADD_SUPER_ADMIN_DATA, GET_ALL_SUPER_ADMIN_DATA } from "./index";

export const getAllSuperAdmin = () => async (dispatch) => {
  axios.get("/api/super_admin").then((res) => {
    dispatch({
      type: GET_ALL_SUPER_ADMIN_DATA,
      payload: res.data,
    });
  });
};

export const addSuperAdmin = (super_admin) => async (dispatch) => {
  axios.post("/api/super_admin", super_admin).then((res) => {
    dispatch({
      type: ADD_SUPER_ADMIN_DATA,
      payload: res.data,
    });
  });
};
