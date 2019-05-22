import React, { Component } from 'react'
// RHL only for front end development
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx'
import BecomeAMember from './components/BecomeAMember.jsx'
import Members from './components/Members.jsx'
import LoanRequests from './components/LoanRequests.jsx'
import AcceptedLoans from './components/AcceptedLoans.jsx'
import GiveRating from './components/GiveRating.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      MembersInfo: [],
      LoanData: []
    }
    this.getData = this.getData.bind(this)
    this.postData = this.postData.bind(this)
    this.getLoanRequestData = this.getLoanRequestData.bind(this)
    this.postLoanRequestData = this.postLoanRequestData.bind(this)
    // this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount () {
    this.getData('/MembersInfo')
    this.getLoanRequestData('/LoanRequestInfo')
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

  getLoanRequestData (url = '') {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          LoanData: data
        })
      })
      .catch(err => console.error(err))
  }

  postLoanRequestData (url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => this.getLoanRequestData(url))
      .catch(err => console.error(err))
  }

  /*
  addItem (First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference) {
    const { MembersInfo } = this.state
    const newItem = {
      First_Name,
      Last_Name,
      Email_Address,
      Current_Employer,
      Job_Title,
      Time_Employed_At_Current_Job,
      Reference
    }

    const existingIndex = Info.findIndex(
      item => item.First_Name === newItem.First_Name
    )

    if (existingIndex === newItem.First_Name) {
      alert('already exists!!!!!!!')
    } else {
      MembersInfo.push(newItem)
    }
  }

*/

  deleteItem (url = '', id = 0) {
    return fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
      .then(() => this.getData('/MemberInfo'))
      .catch(err => console.error(err))
  }

  render () {
    const { MembersInfo } = this.state
    const { LoanData } = this.state
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/BecomeAMember' render={(props) => <BecomeAMember {...props} postData={this.postData} />} />
            <Route exact path='/Members' render={(props) => <Members {...props} MembersInfo={MembersInfo} handleRemove={this.deleteItem} />} />
            <Route exact path='/LoanRequests' render={(props) => <LoanRequests {...props} postLoanRequestData={this.postLoanRequestData} />} />
            <Route exact path='/AcceptedLoans' component={AcceptedLoans} />
            <Route exact path='/GiveRating' component={GiveRating} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App)
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App
