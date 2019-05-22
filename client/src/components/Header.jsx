import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <div>
      <button className='button is-text'><Link to='/AcceptedLoans'>Accepted Loans</Link></button>
      <button className='button is-text'><Link to='/BecomeAMember'>Become A Member</Link></button>
      <button className='button is-text'><Link to='/GiveRating'>Give Rating</Link></button>
      <button className='button is-text'><Link to='/LoanRequests'>Loan Requests</Link></button>
      <button className='button is-text'><Link to='/Members'>Members</Link></button>
    </div>
  </div>
)

export default Header
