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
    const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan } = this.state

    this.props.postMembersLoanRequestData('/LoanRequestInfo', {
      First_Name,
      Last_Name,
      Amount_Requesting,
      Reason_For_Request,
      Willing_To_Finance_Loan
    })

    this.setState({
      First_Name: '',
      Last_Name: '',
      Amount_Requesting: '',
      Reason_For_Request: '',
      Willing_To_Finance_Loan: ''
    })
  }

  render () {
    const { First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan } = this.state
    const { postMembersLoanRequestData } = this.props
    return (
      <div>
        <Header />
        <section className='hero is-small is-primary is-bold is-center'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Request A Loan
              </h1>
              <h2 className='subtitle' />
            </div>
          </div>
        </section>

        <label>
          <strong>First Name:</strong>{' '}
          <input
            type='text'
            name='First_Name'
            value={First_Name}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          <strong>Last Name:</strong>{' '}
          <input
            type='text'
            name='Last_Name'
            value={Last_Name}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          <strong>Amount Requesting:</strong>{' '}
          <input
            type='text'
            name='Amount_Requesting'
            value={Amount_Requesting}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          <strong>Reason For Request (optional):</strong>{' '}
          <input
            type='text'
            name='Reason_For_Request'
            value={Reason_For_Request}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <label>
          <strong>Willing To Finance Loan:</strong>{' '}
          <input
            type='text'
            name='Willing_To_Finance_Loan'
            value={Willing_To_Finance_Loan}
            onChange={this.handleLoanRequestInput}
          />
        </label>

        <br />
        <div className='button is-primary is-outlined is-small'>
          <button className='button is-text is-outlined is-normal' onClick={this.handleLoanRequestSubmit}><strong>SUBMIT</strong></button>
        </div>
      </div>
    )
  }
}

export default RequestALoan
