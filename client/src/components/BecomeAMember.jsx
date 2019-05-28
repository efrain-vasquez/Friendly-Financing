import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import Members from './Members.jsx'

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
    const { MembersInfo } = this.props
    return (
      <div>
        <Header />
        <section className='hero is-small is-primary is-bold is-center'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Become A Member
              </h1>
              <h2 className='subtitle'>
                <strong>Become A Community!</strong>
              </h2>
            </div>
          </div>
        </section>

        <label>
          <strong>First Name:</strong>{' '}
          <input
            type='text'
            name='First_Name'
            value={First_Name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          <strong>Last Name:</strong>{' '}
          <input
            type='text'
            name='Last_Name'
            value={Last_Name}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          <strong>Email Address:</strong>{' '}
          <input
            type='text'
            name='Email_Address'
            value={Email_Address}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          <strong>Current Employer:</strong>{' '}
          <input
            type='text'
            name='Current_Employer'
            value={Current_Employer}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          <strong>Job Title:</strong>{' '}
          <input
            type='text'
            name='Job_Title'
            value={Job_Title}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          <strong>Time Employed At Current Job:</strong>{' '}
          <input
            type='text'
            name='Time_Employed_At_Current_Job'
            value={Time_Employed_At_Current_Job}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <label>
          <strong>Reference:</strong>{' '}
          <input
            type='text'
            name='Reference'
            value={Reference}
            onChange={this.handleInput}
          />
        </label>

        <br />
        <div className='button is-primary is-outlined is-small'>
          <button className='button is-text is-outlined is-normal' onClick={this.handleSubmit}><strong>SUBMIT</strong></button>
        </div>
      </div>
    )
  }
}

export default BecomeAMember
