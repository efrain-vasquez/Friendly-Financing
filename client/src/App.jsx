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
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/BecomeAMember' component={BecomeAMember} />
            <Route exact path='/Members' component={Members} />
            <Route exact path='/LoanRequests' component={LoanRequests} />
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
