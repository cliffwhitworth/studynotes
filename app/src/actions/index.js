import axios from 'axios';
import { GET_CURRENT_USER, GET_DATABASE_USERS, GET_NOTES, SET_NOTES, SELECT_NOTE, GET_NOTES_FROM_MONGO, GET_CATEGORIES } from './types';

// export const getCurrentUser = () => {
//   return function (dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: GET_CURRENT_USER, payload: res }))
//   }
// };

export const getCurrentUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: GET_CURRENT_USER, payload: res.data });
}

export const canUseDatabase = () => async dispatch => {
  const res = await axios.get('/api/can-use-database');

  dispatch({ type: GET_DATABASE_USERS, payload: res.data });
}

export const getNotes = category => dispatch => {
  // localStorage synchronous
  const notes = JSON.parse(localStorage.getItem('notes'));
  const filtered = notes.filter(function(note){
    return note.category===category;
  });
  // const categoryData = JSON.parse(localStorage.getItem(category));
  dispatch({ type: GET_NOTES, payload: filtered });
}

export const setNotes = notes => dispatch => {
  localStorage.setItem('notes', JSON.stringify(notes));
  dispatch({ type: SET_NOTES, payload: notes });
}

export const selectNote = note => dispatch => {
  dispatch({ type: SELECT_NOTE, payload: note });
}

export const postNoteToMongo = note => async dispatch => {
  const res = await axios.post('/api/notes', note);

  dispatch({ type: SELECT_NOTE, payload: res.data });
};

export const loadNotes = () => async dispatch => {
  const res = await axios.get('/api/mongo-notes');

  dispatch({ type: GET_NOTES, payload: res.data });
};

export const getNotesCategoriesFromMongo = () => async dispatch => {
  const res = await axios.get('/api/notes/categories');

  dispatch({ type: GET_CATEGORIES, payload: res.data });
};

export const getNotesCategories = () => async dispatch => {

  let lookup = {};
  const items = JSON.parse(localStorage.getItem('notes'));
  let categories = [];

  for (var item, i = 0; item = items[i++];) {
    var category = item.category;

    if (!(category in lookup)) {
      lookup[category] = 1;
      categories.push(category);
    }
  }

  dispatch({ type: GET_CATEGORIES, payload: categories });
};
