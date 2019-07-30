import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import { Link } from 'react-router-dom'

class PendingLoaneeApproval extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Accepted_Loanee_Loan_ID: '',
      Accepted_Loan_Amount: '',
      Accepted_Interest_On_Loan: '',
      Accepted_Repayment_Schedule: '',
      Accepted_Number_Of_Payments: '',
      Accepted_Amount_Per_Payment: '',
      Accepted_Loanee_Pay_Pal_Data: '',
      Accepted_Lenders_Pay_Pal_Info: ''
    }
    this.handleCreatedLoansInput = this.handleCreatedLoansInput.bind(this)
    this.handleCreatedLoansSubmit = this.handleCreatedLoansSubmit.bind(this)
  }

  // componentDidMount () {
  //   this.setState({
  //     myAccepted_Loanee_Loan_ID: this.props.Loanee_Loan_ID,
  //     Accepted_Loanee_Loan_ID: this.props.Loanee_Loan_ID,
  //     // myAccepted_Loanee_Loan_ID: this.state.Accepted_Loanee_Loan_ID,
  //     // Accepted_Loanee_Loan_ID: Loanee_Loan_ID
  //     Loanee_Loan_ID: this.state.Accepted_Loanee_Loan_ID
  //   })
  // }

  handleCreatedLoansInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleCreatedLoansSubmit (Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) {
    const { Accepted_Loanee_Loan_ID, Accepted_Loan_Amount, Accepted_Interest_On_Loan, Accepted_Repayment_Schedule, Accepted_Number_Of_Payments, Accepted_Amount_Per_Payment, Accepted_Loanee_Pay_Pal_Data, Accepted_Lenders_Pay_Pal_Info } = this.state

    var myAccepted_Loanee_Loan_ID = Loanee_Loan_ID
    var myAccepted_Loan_Amount = Loan_Amount
    var myAccepted_Interest_On_Loan = Interest_On_Loan
    var myAccepted_Repayment_Schedule = Repayment_Schedule
    var myAccepted_Number_Of_Payments = Number_Of_Payments
    var myAccepted_Amount_Per_Payment = Amount_Per_Payment
    var myAccepted_Loanee_Pay_Pal_Data = Loanee_Pay_Pal_Data
    var myAccepted_Lenders_Pay_Pal_Info = Lenders_Pay_Pal_Info

    this.props.postLoansCreatedInfo('/CreatedLoansInfo', {
      Accepted_Loanee_Loan_ID: myAccepted_Loanee_Loan_ID,
      Accepted_Loan_Amount: myAccepted_Loan_Amount,
      Accepted_Interest_On_Loan: myAccepted_Interest_On_Loan,
      Accepted_Repayment_Schedule: myAccepted_Repayment_Schedule,
      Accepted_Number_Of_Payments: myAccepted_Number_Of_Payments,
      Accepted_Amount_Per_Payment: myAccepted_Amount_Per_Payment,
      Accepted_Loanee_Pay_Pal_Data: myAccepted_Loanee_Pay_Pal_Data,
      Accepted_Lenders_Pay_Pal_Info: myAccepted_Lenders_Pay_Pal_Info
    })

    // this.setState({
    //   Accepted_Loanee_Loan_ID: '',
    //   Accepted_Loan_Amount: '',
    //   Accepted_Interest_On_Loan: '',
    //   Accepted_Repayment_Schedule: '',
    //   Accepted_Number_Of_Payments: '',
    //   Accepted_Amount_Per_Payment: '',
    //   Accepted_Loanee_Pay_Pal_Data: '',
    //   Accepted_Lenders_Pay_Pal_Info: ''
    // })
  }

  // handleSubmitStateFromPendingLoaneeApproval (Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) {
  //   this.props.getStateFromPendingLoaneeApproval(Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info)
  // }

  render () {
    const { LoanTermsInfo, CreatedLoansInfo, getMembersLoanTermsData, postLoansCreatedInfo, Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.props
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
              onClick={() => { this.handleCreatedLoansSubmit(Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) }}>
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

//   Accepted_Loanee_Loan_ID: Loanee_Loan_ID,
//   Accepted_Loan_Amount: Loan_Amount,
//   Accepted_Interest_On_Loan: Interest_On_Loan,
//   Accepted_Repayment_Schedule: Repayment_Schedule,
//   Accepted_Number_Of_Payments: Number_Of_Payments,
//   Accepted_Amount_Per_Payment: Amount_Per_Payment,
//   Accepted_Loanee_Pay_Pal_Data: Loanee_Pay_Pal_Data,
//   Accepted_Lenders_Pay_Pal_Info: Lenders_Pay_Pal_Info

// Accepted_Loanee_Loan_ID,
// Accepted_Loan_Amount,
// Accepted_Interest_On_Loan,
// Accepted_Repayment_Schedule,
// Accepted_Number_Of_Payments,
// Accepted_Amount_Per_Payment,
// Accepted_Loanee_Pay_Pal_Data,
// Accepted_Lenders_Pay_Pal_Info

// onClick={this.handleLoanTermsSubmit}>
// onClick={(e) => { this.handleCreatedLoansSubmit(e) }}>

// Accepted_Loanee_Loan_ID: this.props.Loanee_Loan_ID,
// Accepted_Loan_Amount: this.props.Loan_Amount,
// Accepted_Interest_On_Loan: this.props.Interest_On_Loan,
// Accepted_Repayment_Schedule: this.props.Repayment_Schedule,
// Accepted_Number_Of_Payments: this.props.Number_Of_Payments,
// Accepted_Amount_Per_Payment: this.props.Amount_Per_Payment,
// Accepted_Loanee_Pay_Pal_Data: this.props.Loanee_Pay_Pal_Data,
// Accepted_Lenders_Pay_Pal_Info: this.props.Lenders_Pay_Pal_Info
