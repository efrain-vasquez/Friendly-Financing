import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'

class BecomeAMember extends Component {
  constructor (props) {
    super(props)
    this.state = {
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Current_Employer: '',
      Job_Title: '',
      Time_Employed_At_Current_Job: '',
      Reference: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput (e) {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference } = this.state

    this.props.postData('/MembersInfo', {
      First_Name,
      Last_Name,
      Email_Address,
      Current_Employer,
      Job_Title,
      Time_Employed_At_Current_Job,
      Reference
    })

    this.setState({
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Current_Employer: '',
      Job_Title: '',
      Time_Employed_At_Current_Job: '',
      Reference: ''
    })
  }

  render () {
    const { First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference } = this.state
    const { postData } = this.props
    return (
      <div>
        <Header />
        <label>
          First Name:{' '}
          <input
            type='text'
            name='First_Name'
            value={First_Name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Last Name:{' '}
          <input
            type='text'
            name='Last_Name'
            value={Last_Name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Email Address:{' '}
          <input
            type='text'
            name='Email_Address'
            value={Email_Address}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Current Employer:{' '}
          <input
            type='text'
            name='Current_Employer'
            value={Current_Employer}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Job Title:{' '}
          <input
            type='text'
            name='Job_Title'
            value={Job_Title}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Time Employed At Current Job:{' '}
          <input
            type='text'
            name='Time_Employed_At_Current_Job'
            value={Time_Employed_At_Current_Job}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          Reference:{' '}
          <input
            type='text'
            name='Reference'
            value={Reference}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <button onClick={this.handleSubmit}>SUBMIT</button>
      </div>
    )
  }
}

export default BecomeAMember
