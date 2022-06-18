import axios from "axios";

import { GET_ALL_ADMIN_DATA, ADD_ADMIN_DATA, DELETE_ADMIN_DATA } from "./index";

export const getAllAdmin = () => async (dispatch) => {
  axios.get("/api/admin").then((res) => {
    dispatch({
      type: GET_ALL_ADMIN_DATA,
      payload: res.data,
    });
  });
};

export const addAdmin = (admin) => async (dispatch) => {
  axios.post("/api/admin", admin).then((res) => {
    dispatch({
      type: ADD_ADMIN_DATA,
      payload: res.data,
    });
  });
};

export const deleteAdmin = (id) => (dispatch) => {
  axios.delete(`/api/admin/${id}`).then((res) => {
    dispatch({
      type: DELETE_ADMIN_DATA,
      payload: id,
    });
  });
};
