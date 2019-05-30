import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'

class LoanAgreementTerms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Lenders_Pay_Pal_Info: ''
    }

    this.handleLoanTermsInput = this.handleLoanTermsInput.bind(this)
    this.handleLoanTermsSubmit = this.handleLoanTermsSubmit.bind(this)
  }

  handleLoanTermsInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleLoanTermsSubmit (e) {
    e.preventDefault()
    const { id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, Submit_Info } = this.state
    console.log('working')
    this.props.postMembersLoanTermsData('/LoanTermsInfo', {
      Interest_On_Loan,
      Repayment_Schedule,
      Number_Of_Payments,
      Lenders_Pay_Pal_Info
    })

    this.setState({
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Lenders_Pay_Pal_Info: ''
    })
  }

  render () {
    const { LoanTermsInfo } = this.props
    const { Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info } = this.state
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

              <th>Interest On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number of Payments:</th>
              <th>Lenders Pay Pal Information:</th>
              <th>Submit Loan Terms Information:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='field'>
                  <div className='control'>
                    <div className='select is-primary'>
                      <select
                        name='Interest_On_Loan'
                        value={Interest_On_Loan}
                        onChange={this.handleLoanTermsInput}
                        placeholder='Hovered input'>
                        <option value='5 Percent'>5 Percent</option>
                        <option value='10 Percent'>10 Percent</option>
                        <option value='15 Percent'>15 Percent</option>
                        <option value='20 Percent'>20 Percent</option>
                        <option value='25 Percent'>25 Percent</option>
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
                        name='Repayment_Schedule'
                        value={Repayment_Schedule}
                        onChange={this.handleLoanTermsInput}
                        placeholder='Hovered input'>
                        <option value='Weekly'>Weekly</option>
                        <option value='Bi-Weekly'>Bi-Weekly</option>
                        <option value='Monthly'>Monthly</option>
                        <option value='One_Lump_Sum'>One Lump Sum</option>
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
                        name='Number_Of_Payments'
                        value={Number_Of_Payments}
                        onChange={this.handleLoanTermsInput}
                        placeholder='Hovered input'>
                        <option value='1 Payment'>1 Payment</option>
                        <option value='2 Payments'>2 Payments</option>
                        <option value='3 Payments'>3 Payments</option>
                        <option value='4 Payments'>4 Payments</option>
                        <option value='5 Payments'>5 Payments</option>
                        <option value='6 Payments'>6 Payments</option>
                        <option value='7 Payments'>7 Payments</option>
                        <option value='8 Payments'>8 Payments</option>
                        <option value='9 Payments'>9 Payments</option>
                        <option value='10 Payments'>10 Payments</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                  <button className='button is-text is-bold is-outlined is-normal' onClick={this.handleLoanTermsSubmit}><strong>SUBMIT</strong></button>
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
// <div class="field">
//          <div class="control">
//          <label class="label">Select</label>
//          <div class="select">
//          <select
//            class="input is-hovered"
//            placeholder="Hovered input"
//            name="gender"
//            value={gender}
//            onChange={this.handleInput}
//            >
//            <option value="female">FEMALE</option>
//            <option value="male">MALE</option>
//          </select>

// <td>
//                <div class='dropdown is-active'>
//                  <div class='dropdown-trigger'>
//                    <button class='button' aria-haspopup='true' aria-controls='dropdown-menu'>
//                      <span>Interest On Loan</span>
//                      <span class='icon is-small'>
//                        <i class='fas fa-angle-down' aria-hidden='true' />
//                      </span>
//                    </button>
//                  </div>
//                  <div class='dropdown-menu' id='dropdown-menu' role='menu'>
//                    <div class='dropdown-content'>
//                      <input
//                        name='Interest_On_Loan'
//                        value={Interest_On_Loan}
//                        onChange={this.handleLoanTermsInput} />
//                      <a href='#' class='dropdown-item'>
//                        <option value='5 Percent'>5 Percent</option>
//                      </a>
//                      <a class='dropdown-item'>
//                        <option value='10 Percent'>10 Percent</option>
//                      </a>
//                      <a href='#' class='dropdown-item'>
//                        <option value='15 Percent'>15 Percent</option>
//                      </a>
//                      <a href='#' class='dropdown-item'>
//                        <option value='20 Percent'>20 Percent</option>
//                      </a>
//                      <a href='#' class='dropdown-item'>
//                        <option value='25 Percent'>25 Percent</option>
//                      </a>
//                    </div>
//                  </div>
//                </div>
//              </td>

//              <td>
