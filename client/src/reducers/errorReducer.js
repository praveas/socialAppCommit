import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  //despatch action thru this reducer
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
