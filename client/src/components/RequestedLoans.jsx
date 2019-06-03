import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'
import { Link } from 'react-router-dom'

class RequestedLoans extends Component {
  constructor (props) {
    super(props)
    this.handleSubmitWillingToFinanceButton = this.handleSubmitWillingToFinanceButton.bind(this)
  }

  handleSubmitWillingToFinanceButton (arg) {
    this.props.updateLoanAgreementTerms(arg)
  }

  render () {
    const { LoanRequestInfo, updateLoanAgreementTerms } = this.props
    const IndividualRequest =
    ({ Loan_ID, First_Name, Last_Name, Amount_Requesting, Reason_For_Request }) =>
      (<tr>
        <td>{`${Loan_ID}`}</td>
        <td>{`${First_Name}`}</td>
        <td>{`${Last_Name}`}</td>
        <td>{`${Amount_Requesting}`}</td>
        <td>{`${Reason_For_Request}`}</td>
        <td>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-bold is-outlined is-normal'
              onClick={() => { this.handleSubmitWillingToFinanceButton(Loan_ID) }}>
              <Link to='/LoanAgreementTerms'>Willing To Lend</Link>
            </button>
          </div>
        </td>
      </tr>)
    return (
      <div>
        <Header />
        <section className='hero is-primary is-small is-bold title'>
          <div className='hero-body'>
            <div className='container'>
              <p className='title'>List of Requested Loans</p>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>Loan ID:</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Amount Requesting:</th>
              <th>Reason For Request (optional):</th>
              <th>Willing To Finance Loan:</th>
            </tr>
          </thead>
          <tbody>
            {LoanRequestInfo.map(listItem => (
              <IndividualRequest
                Loan_ID={listItem.Loan_ID}
                First_Name={listItem.First_Name}
                Last_Name={listItem.Last_Name}
                Amount_Requesting={listItem.Amount_Requesting}
                Reason_For_Request={listItem.Reason_For_Request}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default RequestedLoans
