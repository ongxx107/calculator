import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddCalculation from './AddCalculation';
import LogList from './LogList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {

    return (
      <div className = 'form form-group' style = {{margin:'5%'}}>
        <h3>Calculator App</h3>
        <AddCalculation />
        <hr />
        <h4>Log List</h4>
        <LogList />
        <hr />
        <button
          className = 'btn btn-danger'
          onClick = {() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);
