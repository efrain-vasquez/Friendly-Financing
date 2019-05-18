import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <div>
      <button className='button is-text'><Link to='/AcceptedLoans'>Accepted_Loans</Link></button>
      <button className='button is-text'><Link to='/BecomeAMember'>Become_A_Member</Link></button>
      <button className='button is-text'><Link to='/GiveRating'>Give_Rating</Link></button>
      <button className='button is-text'><Link to='/LoanRequests'>Loan_Requests</Link></button>
      <button className='button is-text'><Link to='/Members'>Members</Link></button>
    </div>
  </div>
)

export default Header
