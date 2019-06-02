import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'
import PendingLoaneeApproval from './PendingLoaneeApproval.jsx'

class LoanAgreementTerms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      MemberLoan_ID: '',
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Lenders_Pay_Pal_Info: ''
    }

    this.handleLoanTermsInput = this.handleLoanTermsInput.bind(this)
    this.handleLoanTermsSubmit = this.handleLoanTermsSubmit.bind(this)
    // this.getMemberLoanID = this.getMemberLoanID.bind(this)
  }

  componentDidMount () {
    this.setState({
      MemberLoan_ID : this.props.currentID
    })
  }

  // getMemberLoanID (url = '') {
  //   return fetch(url)
  //     .then(response => response.json())
  //     .then(dataIDFromLoanRequestInfo => {
  //       this.setState({
  //         Loan_ID: dataIDFromLoanRequestInfo[0].Loan_ID
  //       })
  //     })
  //     .catch(err => console.error(err))
  // }

  handleLoanTermsInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleLoanTermsSubmit (e) {
    e.preventDefault()
    const { MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info, Submit_Info } = this.state
    this.props.postMembersLoanTermsData('/LoanTermsInfo', {
      MemberLoan_ID,
      Interest_On_Loan,
      Repayment_Schedule,
      Number_Of_Payments,
      Lenders_Pay_Pal_Info
    })

    this.setState({
      MemberLoan_ID: '',
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Lenders_Pay_Pal_Info: ''
    })
  }

  // console.log(this.props.LoanRequestInfo[0])
  render () {
    const { LoanTermsInfo, LoanRequestInfo } = this.props
    const { MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info } = this.state
    const IndividualLoan_IDRequest = ({ Loan_ID }) => (`${Loan_ID}`)
    console.log(this.props.currentID)

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
              <th>Interest Rate On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number of Payments:</th>
              <th>Lenders Pay Pal Information:</th>
              <th>Submit Loan Terms Information:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>
                  {this.state.MemberLoan_ID}
                </label>
              </td>
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
        <PendingLoaneeApproval />
      </div>
    )
  }
}

export default LoanAgreementTerms
