import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import RequestALoan from './RequestALoan.jsx'

class PendingLoans extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { LoanData } = this.props
    const IndividualRequest = ({ id, Date_Of_Entry, First_Name, Last_Name, Amount_Requesting, Reason_For_Request, Willing_To_Finance_Loan }) =>
      (<tr><td>{`${id}`}</td><td>{`${Date_Of_Entry}`}</td><td>{`${First_Name}`}</td><td>{`${Last_Name}`}</td><td>{`${Amount_Requesting}`}</td><td>{`${Reason_For_Request}`}</td><td>
        <div class='select is-primary is-hovered'>
          <select>
            <option>Yes</option>
          </select>
        </div>
        {`${Willing_To_Finance_Loan}`}</td></tr>)

    return (
      <div>
        <Header />
        <section className='hero is-primary is-small is-bold title'>
          <div className='hero-body'>
            <div className='container'>
              <p className='title'>List of Pending Loan Requests</p>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>Requested Loan ID:</th>
              <th>Date Of Entry:</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Amount Requesting:</th>
              <th>Reason For Request (optional):</th>
              <th>Willing To Finance Loan:</th>
            </tr>
          </thead>
          <tbody>
            {LoanData.map(listItem => (
              <IndividualRequest
                key={listItem.id}
                Date_Of_Entry={listItem.Date_Of_Entry}
                First_Name={listItem.First_Name}
                Last_Name={listItem.Last_Name}
                Amount_Requesting={listItem.Amount_Requesting}
                Reason_For_Request={listItem.Reason_For_Request}
                Willing_To_Finance_Loan={listItem.Willing_To_Finance_Loan}
              />
            ))}
          </tbody>
        </table>
      </div>

    )
  }
}

export default PendingLoans
