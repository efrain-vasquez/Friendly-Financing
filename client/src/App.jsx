import React, { Component } from 'react'
// RHL only for front end development
// import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import BecomeAMember from './components/BecomeAMember.jsx'
import Members from './components/Members.jsx'
import RequestALoan from './components/RequestALoan.jsx'
import RequestedLoans from './components/RequestedLoans.jsx'
import LoansCreated from './components/LoansCreated.jsx'
import LoanAgreementTerms from './components/LoanAgreementTerms.jsx'
import PendingLoaneeApproval from './components/PendingLoaneeApproval.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentID: '',
      currentLoanee_Pay_Pal_Info: '',
      currentMemberLoan_ID: '',
      currentInterest_On_Loan: '',
      currentRepayment_Schedule: '',
      currentNumber_Of_Payments: '',
      currentLoanee_Pay_Pal_Data: '',
      currentLenders_Pay_Pal_Info: '',
      MembersInfo: [],
      LoanRequestInfo: [],
      LoanTermsInfo: []
    }
    this.getData = this.getData.bind(this)
    this.postData = this.postData.bind(this)
    this.getMembersLoanRequestData = this.getMembersLoanRequestData.bind(this)
    this.postMembersLoanRequestData = this.postMembersLoanRequestData.bind(this)
    this.getMembersLoanRequestData = this.getMembersLoanRequestData.bind(this)
    this.postMembersLoanTermsData = this.postMembersLoanTermsData.bind(this)
    this.updateLoanAgreementTerms = this.updateLoanAgreementTerms.bind(this)
    this.createAcceptedLoanTermsEntry = this.createAcceptedLoanTermsEntry.bind(this)
  }

  componentDidMount () {
    this.getData('/MembersInfo')
    this.getMembersLoanRequestData('/LoanRequestInfo')
    this.getMembersLoanTermsData('/LoanTermsInfo')
  }

  getData (url = '/MembersInfo') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          MembersInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postData (url = '/MembersInfo', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => this.getData(url))
      .catch(err => console.error(err))
  }

  getMembersLoanRequestData (url = '/LoanRequestInfo') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          LoanRequestInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postMembersLoanRequestData (url = '/LoanRequestInfo', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => this.getMembersLoanRequestData(url))
      .catch(err => console.error(err))
  }

  getMembersLoanTermsData (url = '/LoanTermsInfo') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          LoanTermsInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postMembersLoanTermsData (url = '/LoanTermsInfo', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => this.getMembersLoanTermsData(url))
      .catch(err => console.error(err))
  }

  // this function will be triggered by an event handler in RequestedLoans and
  // will pass the Loan_Id to LoanAgreementTerms as props. Pass this function
  // through props to RequestedLoans component
  updateLoanAgreementTerms (Loan_ID, Loanee_Pay_Pal_Info) {
    this.setState({
      currentID: Loan_ID,
      currentLoanee_Pay_Pal_Info: Loanee_Pay_Pal_Info
    })
  }

  createAcceptedLoanTermsEntry (MemberLoan_ID, Interest_On_Loan, Repayment_Schedule, Number_Of_Payments, Loanee_Pay_Pal_Data, Lenders_Pay_Pal_Info) {
    this.setState({
      currentMemberLoan_ID: MemberLoan_ID,
      currentInterest_On_Loan: Interest_On_Loan,
      currentRepayment_Schedule: Repayment_Schedule,
      currentNumber_Of_Payments: Number_Of_Payments,
      currentLoanee_Pay_Pal_Data: Loanee_Pay_Pal_Data,
      currentLenders_Pay_Pal_Info: Lenders_Pay_Pal_Info
    })
  }

  render () {
    const { currentID, currentLoanee_Pay_Pal_Info, currentMemberLoan_ID, currentInterest_On_Loan, currentRepayment_Schedule, currentNumber_Of_Payments, currentLoanee_Pay_Pal_Data, currentLenders_Pay_Pal_Info, MembersInfo, LoanRequestInfo, LoanTermsInfo } = this.state
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/BecomeAMember' render={(props) =>
              <BecomeAMember {...props}
                MembersInfo={MembersInfo}
                postData={this.postData} />} />
            <Route exact path='/Members' render={(props) =>
              <Members {...props}
                MembersInfo={MembersInfo}
                getData={this.getData} />} />
            <Route exact path='/RequestALoan' render={(props) =>
              <RequestALoan {...props}
                LoanRequestInfo={LoanRequestInfo}
                postMembersLoanRequestData={this.postMembersLoanRequestData} />} />
            <Route exact path='/RequestedLoans' render={(props) =>
              <RequestedLoans {...props}
                updateLoanAgreementTerms={this.updateLoanAgreementTerms}
                LoanRequestInfo={LoanRequestInfo}
                getMembersLoanRequestData={this.getMembersLoanRequestData} />} />
            <Route exact path='/PendingLoaneeApproval' render={(props) =>
              <PendingLoaneeApproval {...props}
                createAcceptedLoanTermsEntry={this.createAcceptedLoanTermsEntry}
                LoanTermsInfo={LoanTermsInfo}
                getMembersLoanTermsData={this.getMembersLoanTermsData} />} />
            <Route exact path='/LoanAgreementTerms' render={(props) =>
              <LoanAgreementTerms {...props}
                currentID={currentID}
                currentLoanee_Pay_Pal_Info={currentLoanee_Pay_Pal_Info}
                LoanTermsInfo={LoanTermsInfo}
                LoanRequestInfo={LoanRequestInfo}
                postMembersLoanTermsData={this.postMembersLoanTermsData} />} />
            <Route exact path='/LoansCreated' render={(props) =>
              <LoansCreated {...props}
                LoanTermsInfo={LoanTermsInfo}
                currentMemberLoan_ID={currentMemberLoan_ID}
                currentInterest_On_Loan={currentInterest_On_Loan}
                currentRepayment_Schedule={currentRepayment_Schedule}
                currentNumber_Of_Payments={currentNumber_Of_Payments}
                currentLoanee_Pay_Pal_Data={currentLoanee_Pay_Pal_Data}
                currentLenders_Pay_Pal_Info={currentLenders_Pay_Pal_Info} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// hot export works with RHL. Remove when starting fullstack integration
// export default hot(module)(App)
//
export default App
