import {
  GET_ALL_EMP_DATA,
  ADD_EMP_DATA,
  DELETE_ADMIN_DATA,
} from "../actions/index";

const initialState = {
  emp: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMP_DATA:
      console.log("action.payload", action.payload);
      return {
        ...state,
        emp: action.payload,
        loading: false,
      };
    case ADD_EMP_DATA:
      return {
        ...state,
        emp: [...state, action.payload],
        loading: false,
      };
    case DELETE_ADMIN_DATA:
      return {
        ...state,
        emp: state.emp.filter((emp) => emp._id != action.payload),
      };

    default:
      return state;
  }
}
