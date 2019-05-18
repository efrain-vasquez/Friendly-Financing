import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import BecomeAMember from './BecomeAMember'

class Members extends Component {
  constructor (props) {
    super(props)
    this.state = {
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Current_Employer: '',
      Job_Title: '',
      Time_Employed_At_Current_Job: '',
      References: ''
    }
  }

  render () {
    return (
      <div>
        <Header />
        <h2>Members</h2>
      </div>
    )
  }
}

export default Members
