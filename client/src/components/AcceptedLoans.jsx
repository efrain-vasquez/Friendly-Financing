import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'

class AcceptedLoans extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { LoanData } = this.props
    const IndividualRequest = ({ id, date, First_Name, Last_Name, Amount_Requesting, Reason_For_Request }) =>
      (<tr><td>{`${id}`}</td><td>{`${date}`}</td><td>{`${First_Name}`}</td><td>{`${Last_Name}`}</td><td>{`${Amount_Requesting}`}</td><td>{`${Reason_For_Request}`}</td></tr>)
    return (
      <div>
        <Header />
        <section className='hero is-primary is-small is-bold title'>
          <div className='hero-body'>
            <div className='container'>
              <p className='title'>List of Loan Requests</p>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>ID:</th>
              <th>Date:</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Amount Requesting:</th>
              <th>Reason For Request (optional):</th>
              <th>Interest On Loan:</th>
              <th>Repayment Schedule:</th>
              <th>Number of Payments:</th>
              <th>Agree To Terms:</th>
            </tr>
          </thead>

          <tbody>
            {LoanData.map(listItem => (
              <IndividualRequest
                key={listItem.id}
                date={listItem.date}
                First_Name={listItem.First_Name}
                Last_Name={listItem.Last_Name}
                Amount_Requesting={listItem.Amount_Requesting}
                Reason_For_Request={listItem.Reason_For_Request}
                Interest_On_Loan={listItem.Interest_On_Loan}
                Repayment_Schedule={listItem.Repayment_Schedule}
                Number_Of_Payments={listItem.Number_Of_Payments}
                Agree_To_Terms={listItem.Agree_To_Terms}
              />
            ))}
          </tbody>

        </table>
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Terms Of Loan Agreement
              </h1>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AcceptedLoans
