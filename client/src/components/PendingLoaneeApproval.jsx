import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import { Link } from 'react-router-dom'

class PendingLoaneeApproval extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Loanee_Loan_ID: '',
      Loan_Amount: '',
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Amount_Per_Payment: '',
      Loanee_Pay_Pal_Data: '',
      Lenders_Pay_Pal_Info: ''
    }
    this.handleCreatedLoansInput = this.handleCreatedLoansInput.bind(this)
    this.handleCreatedLoansSubmit = this.handleCreatedLoansSubmit.bind(this)
  }

  handleCreatedLoansInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleCreatedLoansSubmit (e) {
    e.preventDefault()
    const { Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.state

    this.props.postLoansCreatedInfo('/CreatedLoansInfo', {
      Loanee_Loan_ID: Loanee_Loan_ID,
      Loan_Amount: Loan_Amount,
      Interest_On_Loan: Interest_On_Loan,
      Repayment_Schedule: Repayment_Schedule,
      Number_Of_Payments: Number_Of_Payments,
      Amount_Per_Payment: Amount_Per_Payment,
      Loanee_Pay_Pal_Data: Loanee_Pay_Pal_Data,
      Lenders_Pay_Pal_Info: Lenders_Pay_Pal_Info
    })

    this.setState({
      Loanee_Loan_ID: '',
      Loan_Amount: '',
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Amount_Per_Payment: '',
      Loanee_Pay_Pal_Data: '',
      Lenders_Pay_Pal_Info: ''
    })
  }

  render () {
    const { LoanTermsInfo, CreatedLoansInfo, getMembersLoanTermsData, postLoansCreatedInfo } = this.props
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
              onClick={(e) => { this.handleCreatedLoansSubmit(e) }}>
              <Link to='/LoansCreated'>
              Willing To Accept Terms
              </Link>
            </button>
          </div>
        </td>
      </tr>)
    return (
      <div>
        <Header />
        <section className='hero is-primary is-small is-bold title is-center'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
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
                key={listItem.ID}
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

//   Loanee_Loan_ID: Loanee_Loan_ID,
//   Loan_Amount: Loan_Amount,
//   Interest_On_Loan: Interest_On_Loan,
//   Repayment_Schedule: Repayment_Schedule,
//   Number_Of_Payments: Number_Of_Payments,
//   Amount_Per_Payment: Amount_Per_Payment,
//   Loanee_Pay_Pal_Data: Loanee_Pay_Pal_Data,
//   Lenders_Pay_Pal_Info: Lenders_Pay_Pal_Info
// })

// Loanee_Loan_ID,
// Loan_Amount,
// Interest_On_Loan,
// Repayment_Schedule,
// Number_Of_Payments,
// Amount_Per_Payment,
// Loanee_Pay_Pal_Data,
// Lenders_Pay_Pal_Info
