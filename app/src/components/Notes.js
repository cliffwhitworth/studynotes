import _ from "lodash";
import React, { Component } from 'react';
import requireAuth from '../hoc/requireAuth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Notes extends Component {
  componentDidMount() {
    this.props.getNotes(this.props.locationPath);
    this.props.getNotesCategories();
    window.scrollTo(0, 0);
  }

  selectAndRotateNotes(note) {
    this.props.selectNote(note);
    if(this.props.notes.indexOf(note) === 0)
    {
      let shiftNote = this.props.notes.shift();
      this.props.notes.push(shiftNote);
      this.props.setNotes(this.props.notes);
    }
  }

  renderList() {
    return _.map(this.props.notes, note => {
      return (
        <li key={note.name}
            className="list-group-item">
          <Link
            onClick={() => this.selectAndRotateNotes(note)}
            to={{pathname: "/note-detail", category: this.props.locationPath}}>
            {note.name}
          </Link>
        </li>
      );
    });
  }

  renderCategories() {
    return _.map(this.props.categories, (category, i) => {
      return (
        <li key={i} className="list-group-item">
          <Link className="nav-link text-dark" to={`/notes/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
        </li>
      )
    });
  }

  categoryMessage() {
    if(this.props.categories){
      if(!this.props.categories.length) {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <Link className="nav-link text-dark" to={'/manage-notes'}>Create or load notes</Link>
            </li>
          </ul>
        )
      } else {

      }
    }
  }

  renderContent(){
    if(this.props.locationPath){
      return (
        <div>
          <h2 className="mb-3">{this.props.locationPath.charAt(0).toUpperCase() + this.props.locationPath.slice(1)}</h2>
          <ul className="list-group">
            { this.renderList() }
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h2 className="mb-3">Notes</h2>
          {this.categoryMessage()}
          <ul className="list-group">
            { this.renderCategories() }
          </ul>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="jumbotron jumbotron-fluid mb-0 p-5">
        <div className="container text-center">
          {this.renderContent()}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { notes: state.notes, categories: state.categories, auth: state.auth };
}

export default requireAuth(connect(mapStateToProps, actions)(Notes));
