import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

  <div>
    <nav className='navbar is-transparent' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>

        <button className='button is-text'><Link to='/'>Home</Link></button>

        <button className='button is-text'><Link to='/BecomeAMember'>Become A Member</Link></button>

        <button className='button is-text'><Link to='/GiveRating'>Accepted Loans and Rating</Link></button>

        <button className='button is-text'><Link to='/AcceptedLoans'>Pending Loans</Link></button>

        <button className='button is-text'><Link to='/RequestALoan'>Request A Loan</Link></button>

        <button className='button is-text'><Link to='/Members'>Members</Link></button>

      </div>
    </nav>
  </div>

)

export default Header

// <button className='button is-text'><Link to='/RequestALoan'>Request A Loan</Link></button>
