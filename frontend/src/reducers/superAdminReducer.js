import {
  GET_ALL_SUPER_ADMIN_DATA,
  ADD_SUPER_ADMIN_DATA,
} from "../actions/index";

const initialState = {
  superAdmin: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUPER_ADMIN_DATA:
      return {
        ...state,
        superAdmin: action.payload,
        loading: false,
      };
    case ADD_SUPER_ADMIN_DATA:
      return {
        ...state,
        superAdmin: [...state, action.payload],
        loading: false,
      };

    default:
      return state;
  }
}
