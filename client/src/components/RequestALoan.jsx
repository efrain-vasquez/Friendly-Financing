import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import PendingLoans from './PendingLoans.jsx'

class RequestALoan extends Component {
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

    this.props.postMembersLoanRequestData('/LoanRequestInfo', {
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
    const { postMembersLoanRequestData } = this.props
    return (
      <div>
        <Header />
        <section className='hero is-small is-primary is-bold is-center'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Request A Loan From the Community
              </h1>
              <h2 className='subtitle' />
            </div>
          </div>
        </section>

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

export default RequestALoan
