import React, { Component } from 'react'
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
      currentAmount_Requesting: '',
      MembersInfo: [],
      LoanRequestInfo: [],
      LoanTermsInfo: [],
      CreatedLoansInfo: []
    }
    this.getData = this.getData.bind(this)
    this.postData = this.postData.bind(this)
    this.getMembersLoanRequestData = this.getMembersLoanRequestData.bind(this)
    this.postMembersLoanRequestData = this.postMembersLoanRequestData.bind(this)
    this.getMembersLoanTermsData = this.getMembersLoanTermsData.bind(this)
    this.postMembersLoanTermsData = this.postMembersLoanTermsData.bind(this)
    this.getLoansCreatedInfo = this.getLoansCreatedInfo.bind(this)
    this.postLoansCreatedInfo = this.postLoansCreatedInfo.bind(this)
    this.updateLoanAgreementTerms = this.updateLoanAgreementTerms.bind(this)
  }

  componentDidMount () {
    this.getData('/MembersInfo')
    this.getMembersLoanRequestData('/LoanRequestInfo')
    this.getMembersLoanTermsData('/LoanTermsInfo')
    this.getLoansCreatedInfo('/CreatedLoansInfo')
  }

  getData (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          MembersInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postData (url = '', data = {}) {
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

  getMembersLoanTermsData (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          LoanTermsInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postMembersLoanTermsData (url = '', data = {}) {
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

  getLoansCreatedInfo (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          CreatedLoansInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postLoansCreatedInfo (url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => this.getLoansCreatedInfo(url))
      .catch(err => console.error(err))
  }

  // this function will be triggered by an event handler in RequestedLoans and
  // will pass the Loan_Id to LoanAgreementTerms as props. Pass this function
  // through props to RequestedLoans component
  updateLoanAgreementTerms (Loan_ID, Loanee_Pay_Pal_Info, Amount_Requesting) {
    this.setState({
      currentID: Loan_ID,
      currentLoanee_Pay_Pal_Info: Loanee_Pay_Pal_Info,
      currentAmount_Requesting: Amount_Requesting
    })
  }

  render () {
    const { currentID, currentLoanee_Pay_Pal_Info, currentAmount_Requesting, MembersInfo, LoanRequestInfo, LoanTermsInfo, CreatedLoansInfo } = this.state
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
                LoanTermsInfo={LoanTermsInfo}
                getMembersLoanRequestData={this.getMembersLoanRequestData}
                postMembersLoanTermsData={this.postMembersLoanTermsData} />} />
            <Route exact path='/PendingLoaneeApproval' render={(props) =>
              <PendingLoaneeApproval {...props}
                CreatedLoansInfo={CreatedLoansInfo}
                createAcceptedLoanTermsEntry={this.createAcceptedLoanTermsEntry}
                LoanTermsInfo={LoanTermsInfo}
                getMembersLoanTermsData={this.getMembersLoanTermsData}
                postLoansCreatedInfo={this.postLoansCreatedInfo}
                postMembersLoanTermsData={this.postMembersLoanTermsData} />} />
            <Route exact path='/LoanAgreementTerms' render={(props) =>
              <LoanAgreementTerms {...props}
                updateLoanAgreementTerms={this.updateLoanAgreementTerms}
                currentID={currentID}
                currentLoanee_Pay_Pal_Info={currentLoanee_Pay_Pal_Info}
                currentAmount_Requesting={currentAmount_Requesting}
                LoanTermsInfo={LoanTermsInfo}
                LoanRequestInfo={LoanRequestInfo}
                postMembersLoanTermsData={this.postMembersLoanTermsData} />} />
            <Route exact path='/LoansCreated' render={(props) =>
              <LoansCreated {...props}
                CreatedLoansInfo={CreatedLoansInfo}
                postLoansCreatedInfo={this.postLoansCreatedInfo}
                getLoansCreatedInfo={this.getLoansCreatedInfo} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
