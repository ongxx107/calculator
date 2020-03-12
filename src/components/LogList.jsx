/*eslint-disable no-eval */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logsRef } from '../firebase';
import { setLogs } from '../actions';

class LogList extends Component {
  componentDidMount() {
    logsRef.limitToLast(10).on('value', snap => {
      let logList = [];
      snap.forEach(log => {
        const { email, expr } = log.val();
        const serverKey = log.key;
        logList.push({ email, expr, serverKey });
      })
      this.props.setLogs(logList);
    })
  }

  clearAllCompleted() {
    logsRef.set([]);
  }

  render() {
    return (
      //logs is set from action
      <div>
        {
          this.props.logs.map( (log, index) => {
            const { expr, email } = log;
            return (
              <div
                key={index}
                style={{margin: '5px'}}
              >
                <strong>{ expr } = { eval(expr.replace(/[a-zA-Z^=$]+/g, '')) }</strong>
                <span> calculated by <em>{ email }</em></span>
              </div>
            )
          })
        }
        <br />
        <button
          className = 'btn btn-primary'
          onClick = {() => this.clearAllCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // pass it back to action
  const { logs } = state;
  return {
    logs
  }
}

export default connect(mapStateToProps, { setLogs })(LogList);
