import axios from "axios";

import { GET_ALL_EMP_DATA, ADD_EMP_DATA, DELETE_EMP_DATA } from "./index";

export const getAllEmp = () => async (dispatch) => {
  axios.get("/api/emp").then((res) => {
    console.log("res", res);

    dispatch({
      type: GET_ALL_EMP_DATA,
      payload: res.data,
    });
  });
};

export const addEmp = (emp) => async (dispatch) => {
  axios.post("/api/emp", emp).then((res) => {
    dispatch({
      type: ADD_EMP_DATA,
      payload: res.data,
    });
  });
};

export const deleteEmp = (id) => (dispatch) => {
  axios.delete(`/api/emp/${id}`).then((res) => {
    dispatch({
      type: DELETE_EMP_DATA,
      payload: id,
    });
  });
};
