import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'

class LoanAgreementTerms extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { LoanTermsInfo } = this.props
    const IndividualLoanTerms = ({ id, Date_Of_Entry, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Agree_To_Terms }) =>
      (<tr><td>{`${id}`}</td><td>{`${Date_Of_Entry}`}</td><td>
        <div class='select is-primary is-hovered'>
          <select>
            <option>5%</option>
            <option>10%</option>
            <option>15%</option>
            <option>20%</option>
            <option>25%</option>
          </select>
        </div>
        {`${Interest_On_Loan}`}</td><td>
        <div class='select is-primary is-hovered'>
            <select>
            <option>weekly</option>
            <option>bi-weekly</option>
            <option>monthly</option>
            <option>one lump sum</option>
          </select>
          </div>
        {`${Repayment_Schedule}`}</td><td>
        <div class='select is-primary is-hovered'>
            <select>
            <option>1 Payment</option>
            <option>2 Payments</option>
            <option>3 Payments</option>
            <option>4 Payments</option>
            <option>5 Payments</option>
            <option>6 Payments</option>
            <option>7 Payments</option>
            <option>8 Payments</option>
            <option>9 Payments</option>
            <option>10 Payments</option>
          </select>
          </div>
        {`${Number_Of_Payments}`}</td><td>
        <div class='select is-primary is-hovered'>
            <select>
            <option>Yes I Accept</option>
            <option>No I Do Not Accept</option>
          </select>
          </div>
        {`${Agree_To_Terms}`}</td></tr>)
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
              <th>Date Of Entry:</th>
              <th>Interest On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number of Payments:</th>
              <th>Agree To Terms:</th>
            </tr>
          </thead>

          <tbody>
            {LoanTermsInfo.map(listItem => (
              <IndividualLoanTerms
                key={listItem.id}
                Date_Of_Entry={listItem.Date_Of_Entry}
                Interest_On_Loan={listItem.Interest_On_Loan}
                Repayment_Schedule={listItem.Repayment_Schedule}
                Number_Of_Payments={listItem.Number_Of_Payments}
                Agree_To_Terms={listItem.Agree_To_Terms}
              />
            ))}
          </tbody>

        </table>
      </div>

    )
  }
}

export default LoanAgreementTerms
