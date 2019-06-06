// import React, { Component } from 'react'
// import Header from './Header.jsx'
// import App from '../App.jsx'
// import { Link } from 'react-router-dom'

// class LoansCreated extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       Loanee_MemberLoan_ID: '',
//       Interest_On_Loan: '',
//       Repayment_Schedule: '',
//       Number_Of_Payments: '',
//       Loanee_Pay_Pal_Data: '',
//       Lenders_Pay_Pal_Info: ''
//     }
//     // this.handleCreatedLoanTermsInput = this.handleCreatedLoanTermsInput.bind(this)
//     // this.handleCreatedLoanTermsSubmit = this.handleCreatedLoanTermsSubmit.bind(this)
//   }

//   componentDidMount () {
//     this.setState({
//       Loanee_MemberLoan_ID: this.props.currentMemberLoan_ID,
//       Interest_On_Loan: this.props.currentInterest_On_Loan,
//       Repayment_Schedule: this.props.currentRepayment_Schedule,
//       Number_Of_Payments: this.props.currentNumber_Of_Payments,
//       Loanee_Pay_Pal_Data: this.props.currentLoanee_Pay_Pal_Data,
//       Lenders_Pay_Pal_Info: this.props.currentLenders_Pay_Pal_Info
//     })
//   }

//   // handleCreatedLoanTermsInput (e) {
//   //   const { target } = e
//   //   const { name, value } = target

//   //   this.setState({
//   //     [name]: value

//   // handleCreatedLoanTermsSubmit (e) {
//   //   const { Loanee_MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.state
//   //   this.postLoansCreatedInfo('/CreatedLoansInfo', {
//   //     Loanee_MemberLoan_ID,
//   //     Interest_On_Loan,
//   //     Repayment_Schedule,
//   //     Number_Of_Payments,
//   //     Loanee_Pay_Pal_Data,
//   //     Lenders_Pay_Pal_Info
//   //   })

//   //   this.setState({
//   //     Loanee_MemberLoan_ID: '',
//   //     Interest_On_Loan: '',
//   //     Repayment_Schedule: '',
//   //     Number_Of_Payments: '',
//   //     Loanee_Pay_Pal_Data: '',
//   //     Lenders_Pay_Pal_Info: ''
//   //   })
//   // }

//   render () {
//     const { tiggerhandleCreatedLoanTermsInput, LoanTermsInfo, CreatedLoansInfo, getLoansCreatedInfo, postLoansCreatedInfo } = this.props
//     const { Loanee_MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.state
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
//               <th>Loanee MemberLoan ID:</th>
//               <th>Interest On Loan:</th>
//               <th>Repayment Schedule:</th>
//               <th>Number Of Payments:</th>
//               <th>Loanee Pay Pal Data:</th>
//               <th>Lenders Pay Pal Info:</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <label>
//                   {this.state.Loanee_MemberLoan_ID}
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

// <td>
//   <label>
//     <div className='button is-primary is-outlined is-small'>
//       <button className='button is-text is-bold is-outlined is-normal'
//         onClick={this.handleCreatedLoanTermsSubmit}>
//         <strong>SUBMIT</strong>
//       </button>
//     </div>
//   </label>
// </td>

// const { MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info } = this.props
//   render () {
//     const { LoanTermsInfo } = this.props
//     const IndividualCreatedLoanRequest =
//     ({ MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info }) =>
//       (<tr>
//         <td>{`${MemberLoan_ID}`}</td>
//         <td>{`${Interest_On_Loan}`}</td>
//         <td>{`${Repayment_Schedule}`}</td>
//         <td>{`${Number_Of_Payments}`}</td>
//         <td>{`${Loanee_Pay_Pal_Data}`}</td>
//         <td>{`${Lenders_Pay_Pal_Info}`}</td>
//       </tr>)
//     return (
//       <div>
//         <Header />
//         <section className='hero is-primary is-small is-bold title'>
//           <div className='hero-body'>
//             <div className='container'>
//               <p className='title'>List of Created Loans</p>
//             </div>
//           </div>
//         </section>
//         <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
//           <thead>
//             <tr>
//               <th>MemberLoan ID:</th>
//               <th>Interest On Loan:</th>
//               <th>Repayment Schedule:</th>
//               <th>Number Of Payments:</th>
//               <th>Loanee Pay Pal Data:</th>
//               <th>Lenders Pay Pal Info:</th>
//             </tr>
//           </thead>
//           <tbody>
//             {LoanTermsInfo.map(listItem => (
//               <IndividualCreatedLoanRequest
//                 key={listItem.id}
//                 MemberLoan_ID={listItem.MemberLoan_ID}
//                 Interest_On_Loan={listItem.Interest_On_Loan}
//                 Repayment_Schedule={listItem.Repayment_Schedule}
//                 Number_Of_Payments={listItem.Number_Of_Payments}
//                 Loanee_Pay_Pal_Data={listItem.Loanee_Pay_Pal_Data}
//                 Lenders_Pay_Pal_Info={listItem.Lenders_Pay_Pal_Info}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

// export default LoansCreated
