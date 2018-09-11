import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import notesReducer from './notesReducer';
import noteReducer from './noteReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  notes: notesReducer,
  note: noteReducer,
  categories: categoryReducer
});
