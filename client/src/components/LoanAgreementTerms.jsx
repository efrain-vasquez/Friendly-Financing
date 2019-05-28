import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'

class LoanAgreementTerms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
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
    const { id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info } = this.state

    this.props.postMembersLoanTermsData('/LoanTermsInfo', {
      id,
      Interest_On_Loan,
      Repayment_Schedule,
      Number_Of_Payments,
      Lenders_Pay_Pal_Info
    })

    this.setState({
      id: '',
      Interest_On_Loan: '',
      Repayment_Schedule: '',
      Number_Of_Payments: '',
      Lenders_Pay_Pal_Info: ''
    })
  }

  render () {
    const { LoanTermsInfo } = this.props
    const IndividualLoanTerms = ({ id, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Lenders_Pay_Pal_Info }) =>
      (<tr>
        <td>
          {`${id}`}
        </td>

        <td>
          <div className='field'>
            <div className='control'>
              <div className='select is-primary'>
                <select
                  className='input is-hovered'
                  placeholder='Hovered input'
                  name='Interest_On_Loan'
                  value={Interest_On_Loan}
                  onChange={this.handleLoanTermsInput}>
                  <option value='5 Percent'>5 Percent</option>
                  <option value='10 Percent'>10 Percent</option>
                  <option value='15 Percent'>15 Percent</option>
                  <option value='20 Percent'>20 Percent</option>
                  <option value='25 Percent'>25 Percent</option>
                </select>
              </div>
            </div>
          </div>
          {`${Interest_On_Loan}`}
        </td>

        <td>
          <div className='field'>
            <div className='control'>
              <div className='select is-primary'>
                <select
                  className='input is-hovered'
                  placeholder='Hovered input'
                  name='Repayment_Schedule'
                  value={Repayment_Schedule}
                  onChange={this.handleLoanTermsInput}>
                  <option value='Weekly'>Weekly</option>
                  <option value='Bi-Weekly'>Bi-Weekly</option>
                  <option value='Monthly'>Monthly</option>
                  <option value='One_Lump_Sum'>One Lump Sum</option>
                </select>
              </div>
            </div>
          </div>
          {`${Repayment_Schedule}`}
        </td>

        <td>
          <div className='field'>
            <div className='control'>
              <div className='select is-primary'>
                <select
                  className='input is-hovered'
                  placeholder='Hovered input'
                  name='Number_Of_Payments'
                  value={Number_Of_Payments}
                  onChange={this.handleLoanTermsInput}>
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
          {`${Number_Of_Payments}`}
        </td>

        <td>
          <input
            className='input is-hovered is-primary'
            type='text'
            name='Lenders_Pay_Pal_Info'
            value={Lenders_Pay_Pal_Info}
            onChange={this.handleLoanTermsInput} />
          {`${Lenders_Pay_Pal_Info}`}
        </td>
      </tr>)

    return (
      <div>
        <Header />
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Terms Of Loan Agreement
              </h1>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>ID Of Requested Loan:</th>
              <th>Interest On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number of Payments:</th>
              <th>Lenders Pay Pal Info:</th>
            </tr>
          </thead>

          <tbody>
            {LoanTermsInfo.map(listItem => (
              <IndividualLoanTerms
                key={listItem.id}
                Interest_On_Loan={listItem.Interest_On_Loan}
                Repayment_Schedule={listItem.Repayment_Schedule}
                Number_Of_Payments={listItem.Number_Of_Payments}
                Lenders_Pay_Pal_Info={listItem.Lenders_Pay_Pal_Info}
              />
            ))}
          </tbody>

        </table>
      </div>

    )
  }
}

export default LoanAgreementTerms
