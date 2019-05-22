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
      Reason_For_Request: ''
    }
    this.handleLoanRequestInput = this.handleLoanRequestInput.bind(this)
    this.handleLoanRequestSubmit = this.handleLoanRequestSubmit.bind(this)
  }

  handleLoanRequestInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleLoanRequestSubmit (e) {
    e.preventDefault()
    const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request } = this.state

    this.props.postLoanRequestData('/LoanRequestInfo', {
      First_Name,
      Last_Name,
      Amount_Requesting,
      Reason_For_Request
    })

    this.setState({
      First_Name: '',
      Last_Name: '',
      Amount_Requesting: '',
      Reason_For_Request: ''
    })
  }

  render () {
    const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request } = this.state
    const { postLoanRequestData } = this.props
    return (
      <div>
        <Header />
        <label>
          First Name:{' '}
          <input
            type='text'
            name='First_Name'
            value={First_Name}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          Last Name:{' '}
          <input
            type='text'
            name='Last_Name'
            value={Last_Name}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          Amount Requesting:{' '}
          <input
            type='text'
            name='Amount_Requesting'
            value={Amount_Requesting}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          Reason For Request (optional):{' '}
          <input
            type='text'
            name='Reason_For_Request'
            value={Reason_For_Request}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <button onClick={this.handleLoanRequestSubmit}>SUBMIT</button>
      </div>
    )
  }
}

export default LoanRequests
