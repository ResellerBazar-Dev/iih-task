import {
  GET_ALL_ADMIN_DATA,
  ADD_ADMIN_DATA,
  DELETE_ADMIN_DATA,
} from "../actions/index";

const initialState = {
  admin: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ADMIN_DATA:
      return {
        ...state,
        admin: action.payload,
        loading: false,
      };
    case ADD_ADMIN_DATA:
      return {
        ...state,
        admin: [...state, action.payload],
        loading: false,
      };
    case DELETE_ADMIN_DATA:
      return {
        ...state,
        admin: state.admin.filter((admin) => admin._id != action.payload),
      };

    default:
      return state;
  }
}
