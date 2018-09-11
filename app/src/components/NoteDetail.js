import React, { Component } from "react";
import { connect } from "react-redux";
import requireAuth from '../hoc/requireAuth';
import { Link, Redirect } from 'react-router-dom';
import * as actions from "../actions";
// import { selectNote } from "../actions";
// import { bindActionCreators } from "redux";

class NoteDetail extends Component {
  componentDidMount() {
    // this.props.postNoteToMongo(this.props.note);
    window.scrollTo(0, 0);
  }

  render() {

    if(!this.props.note){
      return <Redirect to='/' />
    }

    let newCode = this.props.note.code.split('\n').map((item, i) => {
        return <span key={i}>{item}<br /></span>;
    });

    return (
      <div className="jumbotron jumbotron-fluid mb-0 p-5">
        <div className="container text-center">
          <h2 className="my-3">Details for {this.props.note.name}</h2>
          <div className="text-left"><strong>Purpose</strong>: {this.props.note.purpose}</div>
          <br />
          <div className="text-left"><strong>Code</strong>: {newCode}</div>
          <br />
          <div className="text-center my-1"><button>
          <Link
              to={{pathname: "/notes/" + this.props.location.category}}>
              List of {this.props.location.category[0].toUpperCase() + this.props.location.category.slice(1)}
          </Link>
          </button></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    note: state.note
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectNote: selectNote }, dispatch);
// }

export default requireAuth(connect(mapStateToProps, actions)(NoteDetail));
