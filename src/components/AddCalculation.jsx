import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logsRef } from '../firebase';

class AddCalculation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: ''
    }
  }

  addCalculation() {
    const { expr } = this.state;
    const { email } = this.props.user;
    logsRef.push({email, expr});
  }

  render() {
    return (
      <div className = 'form-inline'>
        <div className = 'form-group'>
          <input
            type = 'text'
            placeholder = 'Use +,-,*,/ operators. Ex: 2*3'
            className = 'form-control'
            style = {{margin: '5px', width: '150%'}}
            onChange = { event => this.setState({ expr: event.target.value }) }
            onKeyPress = { event => {
              if (event.key === 'Enter') {
                this.addCalculation()
              }
            } }
          />
          <button
            className = 'btn btn-success'
            type = 'button'
            onClick = { () => this.addCalculation() }

          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddCalculation);
