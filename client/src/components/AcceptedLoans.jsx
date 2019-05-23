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
    const IndividualRequest = ({ First_Name, Last_Name, Amount_Requesting, Reason_For_Request }) =>
      (<tr><td>{`${First_Name}`}</td><td>{`${Last_Name}`}</td><td>{`${Amount_Requesting}`}</td><td>{`${Reason_For_Request}`}</td></tr>)
    return (
      <div>
        <Header />
        <section className='hero is-light bold title'>
          <div className='hero-body'>
            <div className='container'>
              <p className='title'>List of Loan Requests</p>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Amount Requesting:</th>
              <th>Reason For Request (optional):</th>
            </tr>
          </thead>

          <tbody>
            {LoanData.map(listItem => (
              <IndividualRequest
                key={listItem.id}
                First_Name={listItem.First_Name}
                Last_Name={listItem.Last_Name}
                Amount_Requesting={listItem.Amount_Requesting}
                Reason_For_Request={listItem.Reason_For_Request}
              />
            ))}
          </tbody>

        </table>
      </div>
    )
  }
}

export default AcceptedLoans
