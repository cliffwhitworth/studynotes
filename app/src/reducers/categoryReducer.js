import { GET_CATEGORIES } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
