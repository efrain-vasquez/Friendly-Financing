import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import { Link } from 'react-router-dom'

class LoansCreated extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { CreatedLoansInfo, getLoansCreatedInfo } = this.props
    const CreatedLoanRequest =
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
      </tr>)
    return (
      <div>
        <Header />
        <section className='hero is-primary is-small is-bold title is-center'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <p className='title'>List of Agreed Upon Loans</p>
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
            </tr>
          </thead>
          <tbody>
            {CreatedLoansInfo.map(listItem => (
              <CreatedLoanRequest
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

export default LoansCreated

//   render () {
//     const { LoanTermsInfo, CreatedLoansInfo, getLoansCreatedInfo, postLoansCreatedInfo } = this.props
//     const { Loanee_Loan_ID, Loan_Amount, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Amount_Per_Payment, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.state
//     return (
//       <div>
//         <Header />
//         <section className='hero is-primary is-small is-bold'>
//           <div className='hero-body'>
//             <div className='container'>
//               <p className='title'>Loans Agreed Upon By Both Loanee and Lender</p>
//             </div>
//           </div>
//         </section>
//         <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
//           <thead>
//             <tr>
//               <th>Loanee Loan ID:</th>
//               <th>Loan Amount:</th>
//               <th>Interest On Loan:</th>
//               <th>Repayment Schedule:</th>
//               <th>Number Of Payments:</th>
//               <th>Amount Per Payment:</th>
//               <th>Loanee Pay Pal Data:</th>
//               <th>Lenders Pay Pal Info:</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <label>
//                   {this.state.Loanee_Loan_ID}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Loan_Amount}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Interest_On_Loan}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Repayment_Schedule}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Number_Of_Payments}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Amount_Per_Payment}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Loanee_Pay_Pal_Data}
//                 </label>
//               </td>
//               <td>
//                 <label>
//                   {this.state.Lenders_Pay_Pal_Info}
//                 </label>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

// export default LoansCreated
