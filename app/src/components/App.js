import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './home';
import Notes from './Notes';
import NoteDetail from './NoteDetail';
import ManageNotes from './ManageNotes';
import Footer from './footer';

const checkNotes = props => {
  if (!localStorage.getItem('notes') || localStorage.getItem('notes').toString() === 'null') {
    const notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  return <Notes />
}

const checkManageNotes = props => {
  if (!localStorage.getItem('notes') || localStorage.getItem('notes').toString() === 'null') {
    const notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  return <ManageNotes />
}

const notesCategory = ({ match, props }) => {
  return (
    <Notes
      locationPath={match.params.id}
      {...props}
    />
  )
};

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    let checkForNotes = JSON.parse(localStorage.getItem('notes'));

    if (localStorage.getItem('notes').toString() === 'null') {
      const notes = [];
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="col-md-8 mx-auto">
          <Header />
          <Route path = '/' exact component = {Home} />
          <Route path = '/notes' exact component = {checkNotes} />
          <Route path = '/notes/:id' exact component = {notesCategory} />
          <Route path='/note-detail' component={NoteDetail} />
          <Route path='/manage-notes' component={checkManageNotes} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
