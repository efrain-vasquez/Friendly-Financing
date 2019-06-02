import React, { Component } from 'react'
// RHL only for front end development
// import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import BecomeAMember from './components/BecomeAMember.jsx'
import Members from './components/Members.jsx'
import RequestALoan from './components/RequestALoan.jsx'
import RequestedLoans from './components/RequestedLoans.jsx'
import GiveRating from './components/GiveRating.jsx'
import LoanAgreementTerms from './components/LoanAgreementTerms.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentID: "teststeset",
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
  }

  componentDidMount () {
    this.getData('/MembersInfo')
    this.getMembersLoanRequestData('/LoanRequestInfo')
    this.getMembersLoanTermsData('/LoanTermsInfo')
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

  getMembersLoanRequestData (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          LoanRequestInfo: data
        })
      })
      .catch(err => console.error(err))
  }

  postMembersLoanRequestData (url = '', data = {}) {
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

  // this function will be triggered by an event handler in RequestedLoans and
  // will pass the Loan_Id to LoanAgreementTerms as props. Pass this function
  // through props to RequestedLoans component
  updateLoanAgreementTerms (arg) {
    this.setState({
      currentID : arg
    })
    console.log(this.state.currentID)
  }
  

  render () {
    const { MembersInfo, LoanRequestInfo, LoanTermsInfo} = this.state
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/BecomeAMember' render={(props) => <BecomeAMember {...props} MembersInfo={MembersInfo} getData={this.getData} postData={this.postData} />} />
            <Route exact path='/Members' render={(props) => <Members {...props} MembersInfo={MembersInfo} getData={this.getData} postData={this.postData} />} />
            <Route exact path='/RequestALoan' render={(props) => <RequestALoan {...props} LoanRequestInfo={LoanRequestInfo} getMembersLoanRequestData={this.getMembersLoanRequestData} postMembersLoanRequestData={this.postMembersLoanRequestData} />} />
            <Route exact path='/RequestedLoans' render={(props) => <RequestedLoans {...props} updateLoanAgreementTerms={this.updateLoanAgreementTerms} LoanRequestInfo={LoanRequestInfo} postMembersLoanRequestData={this.postMembersLoanRequestData} getMembersLoanRequestData={this.getMembersLoanRequestData} />} />
            <Route exact path='/LoanAgreementTerms' render={(props) => <LoanAgreementTerms {...props}          LoanTermsInfo={LoanTermsInfo} LoanRequestInfo={LoanRequestInfo} postMembersLoanTermsData={this.postMembersLoanTermsData} getMembersLoanTermsData={this.getMembersLoanTermsData} />} />
            <Route exact path='/GiveRating' component={GiveRating} />
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
