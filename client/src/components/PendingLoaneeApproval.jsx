import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'

class PendingLoaneeApproval extends Component {
  constructor (props) {
    super(props)
  }

  render () {
  	const { LoanTermsInfo, LoanRequestInfo } = this.props
    return (
      <div>
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Loans Pending To Be Accepted By Loanee
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
              <th>Amount Per Payment:</th>
              <th>Lenders Pay Pal Information:</th>
              <th>I Agree To Loan Terms:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
            	 1
                </div>
              </td>
              <td>
                <div>
                 2
                </div>
              </td>
              <td>
                <div>
                3
                </div>
              </td>
              <td>
                <div>
                 4
                </div>
              </td>
              <td>
                <div>
            	 5
                </div>
              </td>
              <td>
                <div>
                 6
                </div>
              </td>
              <td>
                <div className='button is-primary is-outlined is-small'>
                  <button className='button is-text is-bold is-outlined is-normal' onClick={this.handleSubmitWillingToAcceptLoanTermsButton}><strong>Accept Loan Terms</strong></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PendingLoaneeApproval
