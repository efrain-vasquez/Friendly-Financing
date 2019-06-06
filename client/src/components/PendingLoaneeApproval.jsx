import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import { Link } from 'react-router-dom'

class PendingLoaneeApproval extends Component {
  constructor (props) {
    super(props)
    this.handleSubmitWillingToAcceptTermsButton = this.handleSubmitWillingToAcceptTermsButton.bind(this)
  }

  handleSubmitWillingToAcceptTermsButton () {
  }

  render () {
    const { LoanTermsInfo, CreatedLoansInfo, getMembersLoanTermsData } = this.props
    const IndividualLoanRequest =
    ({ Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info }) =>
      (<tr>
        <td>{`${Loanee_Loan_ID}`}</td>
        <td>{`${Loan_Amount}`}</td>
        <td>{`${Interest_On_Loan}`}</td>
        <td>{`${Repayment_Schedule}`}</td>
        <td>{`${Number_Of_Payments}`}</td>
        <td>{`${Amount_Per_Payment}`}</td>
        <td>{`${Loanee_Pay_Pal_Data}`}</td>
        <td>{`${Lenders_Pay_Pal_Info}`}</td>
        <td>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-bold is-outlined is-normal'
              onClick={() => { this.handleSubmitWillingToAcceptTermsButton() }}>
              Willing To Accept Terms
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
              <p className='title'>List of Pending Loans</p>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>Loanee Loan ID:</th>
              <th>Loan Amount:</th>
              <th>Interest On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number Of Payments:</th>
              <th>Amount Per Payment:</th>
              <th>Loanee Pay Pal Data:</th>
              <th>Lenders Pay Pal Info:</th>
              <th>Willing To Accept Terms:</th>
            </tr>
          </thead>
          <tbody>
            {LoanTermsInfo.map(listItem => (
              <IndividualLoanRequest
                Loanee_Loan_ID={listItem.Loanee_Loan_ID}
                Loan_Amount={listItem.Loan_Amount}
                Interest_On_Loan={listItem.Interest_On_Loan}
                Repayment_Schedule={listItem.Repayment_Schedule}
                Number_Of_Payments={listItem.Number_Of_Payments}
                Amount_Per_Payment={listItem.Amount_Per_Payment}
                Loanee_Pay_Pal_Data={listItem.Loanee_Pay_Pal_Data}
                Lenders_Pay_Pal_Info={listItem.Lenders_Pay_Pal_Info}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PendingLoaneeApproval
