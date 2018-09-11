import { GET_NOTES, SET_NOTES, GET_NOTES_FROM_MONGO } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    case SET_NOTES:
      return action.payload;
    case GET_NOTES_FROM_MONGO:
      return action.payload;
    default:
      return state;
  }
}
