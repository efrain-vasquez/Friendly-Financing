import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import BecomeAMember from './BecomeAMember'

class Members extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { MembersInfo, handleRemove } = this.props
    const IndividualMember = ({ First_Name, Last_Name, Email_Address, Current_Employer, Job_Title, Time_Employed_At_Current_Job, Reference, removeItem }) =>
      (<tr onClick={handleRemove}><td onClick={handleRemove}>{`${First_Name}`}</td><td onClick={handleRemove}>{`${Last_Name}`}</td><td onClick={handleRemove}>{`${Email_Address}`}</td><td onClick={handleRemove}>{`${Current_Employer}`}</td><td onClick={handleRemove}>{`${Job_Title}`}</td><td onClick={handleRemove}>{`${Time_Employed_At_Current_Job}`}</td><td onClick={handleRemove}>{`${Reference}`}</td></tr>)
    return (
      <div>
        <Header />
        <section className='hero is-light bold title'>
          <div className='hero-body'>
            <div className='container'>
              <p className='title'>List of Members</p>
            </div>
          </div>
        </section>
        <table className='table table is-striped is-hoverable is-fullwidth is-bordered'>
          <thead>
            <tr>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Email Address:</th>
              <th>Current Employer:</th>
              <th>Job Title:</th>
              <th>Time Employed At Current Job:</th>
              <th>Reference:</th>
            </tr>
          </thead>

          <tbody>
            {MembersInfo.map(listItem => (
              <IndividualMember
                key={listItem.id}
                First_Name={listItem.First_Name}
                Last_Name={listItem.Last_Name}
                Email_Address={listItem.Email_Address}
                Current_Employer={listItem.Current_Employer}
                Job_Title={listItem.Job_Title}
                Time_Employed_At_Current_Job={listItem.Time_Employed_At_Current_Job}
                Reference={listItem.Reference}
                handleRemove={() => handleRemove('/MembersInfo', listItem.id)}
              />
            ))}
          </tbody>

        </table>
      </div>
    )
  }
}

export default Members
