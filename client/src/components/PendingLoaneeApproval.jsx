import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import { Link } from 'react-router-dom'

class PendingLoaneeApproval extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { LoanTermsInfo } = this.props
    const IndividualLoanRequest =
    ({ MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info }) =>
      (<tr>
        <td>{`${MemberLoan_ID}`}</td>
        <td>{`${Interest_On_Loan}`}</td>
        <td>{`${Repayment_Schedule}`}</td>
        <td>{`${Number_Of_Payments}`}</td>
        <td>{`${Loanee_Pay_Pal_Data}`}</td>
        <td>{`${Lenders_Pay_Pal_Info}`}</td>
        <td>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-bold is-outlined is-normal'
              onClick={() => { this.handleSubmitWillingToAccepTermsButton(MemberLoan_ID, Loanee_Pay_Pal_Data) }}>
              <Link to='/GiveRating'>Willing To Accept Terms</Link>
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
              <th>MemberLoan ID:</th>
              <th>Interest On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number Of Payments:</th>
              <th>Loanee Pay Pal Data:</th>
              <th>Lenders Pay Pal Info:</th>
              <th>Willing To Accept Terms:</th>
            </tr>
          </thead>
          <tbody>
            {LoanTermsInfo.map(listItem => (
              <IndividualLoanRequest
                MemberLoan_ID={listItem.MemberLoan_ID}
                Interest_On_Loan={listItem.Interest_On_Loan}
                Repayment_Schedule={listItem.Repayment_Schedule}
                Number_Of_Payments={listItem.Number_Of_Payments}
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
