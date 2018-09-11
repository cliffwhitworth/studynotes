import _ from 'lodash';
import React, { Component } from 'react';
import requireAuth from '../hoc/requireAuth';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import * as actions from '../actions';

let showNewCategory = false;

const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

const renderTextArea = ({
  input,
  label,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea className="w-100" {...input} placeholder={label} />
      <br />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
)

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="w-100" {...input} placeholder={label} type={type} />
      <br />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-danger">{warning}</span>))}
    </div>
  </div>
)

class ManageNotes extends Component {

  componentDidMount() {
    this.props.getNotesCategories();
    this.props.loadNotes();
    window.scrollTo(0, 0);
  }

  state = {
    message: 'Look here for confirmation'
  }

  renderOptions = () => {
    return _.map(this.props.categories, (category, i) => {
      return (
        <option key={i} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
      );
    });
  }

  renderSelect = () => ({
    input,
    label,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <select className="w-100" {...input}>
          <option value="Select">Please select...</option>
          <option value="New">New Category</option>
          {this.renderOptions()}
        </select>
        <br />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  onResetNotes = () => (e) => {
    this.setState({message: 'Items have been reset'});
    localStorage.setItem('notes', JSON.stringify(this.props.notes))
  }

  renderList() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return _.map(_.take(_.reverse(notes), 5), note => {
      return (
        <div key={note.name}>{note.name}</div>
      );
    });
  }


  submit = values => {
    let realCategory = '';
    if(values.category === "New"){
      realCategory = values.newcategory;
    } else {
      realCategory = values.category;
    }

    const newNote = {
      category: realCategory,
      name: values.name,
      purpose: values.purpose,
      code: values.code
    }

    const notes = JSON.parse(localStorage.getItem('notes'));
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mb-0 p-5">
        <div className="container text-center">
          <h2 className="mb-3">Manage Data</h2>
          <div className="text-left w-75 mx-auto">
            <form
              onSubmit={this.props.handleSubmit(this.submit)}
            >
            <br />
            <Field
              name="category"
              component={this.renderSelect()}
              label="Category:"
              validate={required}
            />
            {showNewCategory &&
              <div>
                <br />
                <Field
                  name="newcategory"
                  type="text"
                  component={renderInput}
                  label="New Category:"
                  validate={[required, alphaNumeric]}
                  warn={alphaNumeric}
                />
              </div>
            }
            <br />
            <div>
              <Field
                name="name"
                type="text"
                component={renderInput}
                label="Name:"
                validate={[required, alphaNumeric]}
                warn={alphaNumeric}
              />
            </div>
            <br />
            <Field
              name="purpose"
              component={renderTextArea}
              label="Description (Purpose):"
              validate={required}
            />
            <br />
            <Field
              name="code"
              component={renderTextArea}
              label="Text with line breaks (Code):"
            />
            <br />
              <div className="mb-1">
                <button type="submit" className="float-left">Save Note</button>
                <button onClick={this.onResetNotes()} type="button" className="float-right">Load Notes</button>
              </div>
              <br />
              <div className="w-100 mt-2 mb-3 clearfix">
                <span className="float-right">{this.state.message}</span>
              </div>
            </form>
            <div className="text-center">
              <strong className="text-center">Last 5 note entries</strong>
              {this.renderList()}
            </div>
          </div>
        </div>
              </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (values.category === "New") {
    showNewCategory = true;
  } else {
    showNewCategory = false;
  }

  return {errors, showNewCategory};
}

const selector = formValueSelector('manageDataForm') // <-- same as form name

ManageNotes = reduxForm({
  validate,
  form: 'manageDataForm'
})(connect(
  state => {
    const showNewCategory = selector(state, 'category')
    return {
      showNewCategory
    }
  }
)(ManageNotes))

function mapStateToProps(state) {
  return { categories: state.categories, notes: state.notes, auth: state.auth };
}

export default requireAuth(connect(mapStateToProps, actions)(ManageNotes));
