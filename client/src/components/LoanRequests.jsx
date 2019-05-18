/*

import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'

class LoanRequests extends Component {
  constructor (props) {
    super(props)
    this.state = {
      First_Name: '',
      Last_Name: '',
      Amount_Requesting: '',
      Reason_For_Request: '',
      Interest_Willing_To_Pay: '',
      Time_Needed_To_Repay: ''
    }
    this.handleMyLoanInput = this.handleMyLoanInput.bind(this)
    this.handleMyLoanSubmit = this.handleMyLoanSubmit.bind(this)
  }

  handleMyLoanInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleMyLoanSubmit (e) {
    e.preventDefault()
    const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Interest_Willing_To_Pay, Time_Needed_To_Repay } = this.state

    this.props.postMyLoanData('/MembersInfo', {
      First_Name: '',
      Last_Name: '',
      Amount_Requesting: '',
      Reason_For_Request: '',
      Interest_Willing_To_Pay: '',
      Time_Needed_To_Repay: ''
    })
  }

  render () {
    const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Interest_Willing_To_Pay, Time_Needed_To_Repay } = this.state
    const { postMyLoanData } = this.props
    return (
      <div>
        <Header />
        <label>
          First Name:{' '}
          <input
            type='text'
            name='First_Name'
            value={First_Name}
            onChange={this.handleMyLoanInput}
          />
        </label>

        <br />
        <label>
          Last Name:{' '}
          <input
            type='text'
            name='Last_Name'
            value={Last_Name}
            onChange={this.handleMyLoanInput}
          />
        </label>

        <br />
        <label>
          Amount Requesting:{' '}
          <input
            type='text'
            name='Amount_Requesting'
            value={Amount_Requesting}
            onChange={this.handleMyLoanInput}
          />
        </label>

        <br />
        <label>
          Reason For Request:{' '}
          <input
            type='text'
            name='Reason_For_Request'
            value={Reason_For_Request}
            onChange={this.handleMyLoanInput}
          />
        </label>

        <br />
        <label>
          Interest Willing To Pay:{' '}
          <input
            type='text'
            name='Interest_Willing_To_Pay'
            value={Interest_Willing_To_Pay}
            onChange={this.handleMyLoanInput}
          />
        </label>

        <br />
        <label>
          Time Needed To Repay:{' '}
          <input
            type='text'
            name='Time_Needed_To_Repay'
            value={Time_Needed_To_Repay}
            onChange={this.handleMyLoanInput}
          />
        </label>

        <br />
        <button onClick={this.handleMyLoanSubmit}>SUBMIT</button>
      </div>
    )
  }
}

export default LoanRequests

*/
