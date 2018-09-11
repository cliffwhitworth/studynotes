import { GET_CURRENT_USER, GET_DATABASE_USERS } from '../actions/types';

export default function(state = null, action) {
  switch(action.type){
    case GET_CURRENT_USER:
      return action.payload || false;
    case GET_DATABASE_USERS:
      return action.payload;
    default:
      return state;
  }
}
