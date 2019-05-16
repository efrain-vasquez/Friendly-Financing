import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <div>
      <button className='button is-text'><Link to='/AcceptedLoans'>AcceptedLoans</Link></button>
      <button className='button is-text'><Link to='/BecomeAMember'>BecomeAMember</Link></button>
      <button className='button is-text'><Link to='/GiveRating'>GiveRating</Link></button>
      <button className='button is-text'><Link to='/LoanRequests'>LoanRequests</Link></button>
      <button className='button is-text'><Link to='/Members'>Members</Link></button>
    </div>
  </div>
)

export default Header
