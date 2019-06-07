import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'
import PendingLoaneeApproval from './PendingLoaneeApproval.jsx'
import { Link } from 'react-router-dom'

class LoanAgreementTerms extends Component {
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
    this.handleLoanTermsInput = this.handleLoanTermsInput.bind(this)
    this.handleLoanTermsSubmit = this.handleLoanTermsSubmit.bind(this)
    this.calculateAmountPerPayment = this.calculateAmountPerPayment.bind(this)
  }

  componentDidMount () {
    this.setState({
      Loanee_Loan_ID: this.props.currentID,
      Loanee_Pay_Pal_Data: this.props.currentLoanee_Pay_Pal_Info,
      Loan_Amount: this.props.currentAmount_Requesting
    })
  }

  handleLoanTermsInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  calculateAmountPerPayment (Loan_Amount, Interest_On_Loan, Number_Of_Payments) {
    const result = parseFloat((Loan_Amount * (Interest_On_Loan / 100)) / Number_Of_Payments)
    return result
  }

  handleLoanTermsSubmit (e) {
    e.preventDefault()
    const { Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.state

    var currentAmountPerPayment = this.calculateAmountPerPayment(Loan_Amount, Interest_On_Loan, Number_Of_Payments)

    this.props.postMembersLoanTermsData('/LoanTermsInfo', {
      Loanee_Loan_ID,
      Loan_Amount,
      Interest_On_Loan,
      Repayment_Schedule,
      Number_Of_Payments,
      Amount_Per_Payment: Amount_Per_Payment + currentAmountPerPayment,
      Loanee_Pay_Pal_Data,
      Lenders_Pay_Pal_Info
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
    const { LoanTermsInfo, LoanRequestInfo, postMembersLoanTermsData } = this.props
    const { Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.state
    return (
      <div>
        <Header />
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Terms Of Loan From Lender
              </h1>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>ID Of Loan To Be Financed:</th>
              <th>Principal Loan Amount:</th>
              <th>Interest Rate On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Numbers of Payments:</th>
              <th>Amount Per Payment:</th>
              <th>Loanee Pay Pal Data:</th>
              <th>Lenders Pay Pal Information:</th>
              <th>Submit Loan Terms Information:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>
                  {this.state.Loanee_Loan_ID}
                </label>
              </td>
              <td>
                <label>
                  {this.state.Loan_Amount}
                </label>
              </td>
              <td>
                <div className='field'>
                  <div className='control'>
                    <div className='select is-primary'>
                      <select
                        type='Number'
                        name='Interest_On_Loan'
                        value={Interest_On_Loan}
                        onChange={this.handleLoanTermsInput}
                        placeholder='Hovered input'>
                        <option value={5} >5 Percent</option>
                        <option value={10} >10 Percent</option>
                        <option value={15} >15 Percent</option>
                        <option value={20} >20 Percent</option>
                        <option value={25} >25 Percent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className='field'>
                  <div className='control'>
                    <div className='select is-primary'>
                      <select
                        type='number'
                        name='Repayment_Schedule'
                        value={Repayment_Schedule}
                        onChange={this.handleLoanTermsInput}
                        placeholder='Hovered input'>
                        <option value='Weekly'>Weekly</option>
                        <option value='Bi-Weekly'>Bi-Weekly</option>
                        <option value='Monthly'>Monthly</option>
                        <option value='One Lump Sum'>One Lump Sum</option>
                      </select>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className='field'>
                  <div className='control'>
                    <div className='select is-primary'>
                      <select
                        type='number'
                        name='Number_Of_Payments'
                        value={Number_Of_Payments}
                        onChange={this.handleLoanTermsInput}
                        placeholder='Hovered input'>
                        <option value={1} >1 Payment</option>
                        <option value={2} >2 Payments</option>
                        <option value={3} >3 Payments</option>
                        <option value={4} >4 Payments</option>
                        <option value={5} >5 Payments</option>
                        <option value={6} >6 Payments</option>
                        <option value={7} >7 Payments</option>
                        <option value={8} >8 Payments</option>
                        <option value={9} >9 Payments</option>
                        <option value={10} >10 Payments</option>
                      </select>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <label>
                  {this.state.Amount_Per_Payment}
                </label>
              </td>
              <td>
                <label>
                  {this.state.Loanee_Pay_Pal_Data}
                </label>
              </td>
              <td>
                <label>
                  <input
                    className='input is-primary'
                    type='text'
                    name='Lenders_Pay_Pal_Info'
                    value={Lenders_Pay_Pal_Info}
                    onChange={this.handleLoanTermsInput} />
                </label>
              </td>
              <td>
                <div className='button is-primary is-outlined is-small'>
                  <button className='button is-text is-bold is-outlined is-normal'
                    onClick={this.handleLoanTermsSubmit}>

                    <strong>SUBMIT</strong>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default LoanAgreementTerms

// Loan_Amount(Interest_On_Loan(1+Interest_On_Loan)^Number_Of_Payments)/(1+Interest_On_Loan)^Number_Of_Payments-1);
