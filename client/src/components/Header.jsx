import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

  <div>
    <nav className='navbar is-transparent' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined'>
            <button className='button is-text is-light is-bold is-outlined is-medium'><Link to='/'><strong>Home</strong></Link></button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined'>
            <button className='button is-text is-light is-bold is-outlined is-medium'><Link to='/BecomeAMember'><strong>Become A Member</strong></Link></button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined'>
            <button className='button is-text is-light is-bold is-outlined is-medium'><Link to='/GiveRating'><strong>Accepted Loans</strong></Link></button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined'>
            <button className='button is-text is-light is-bold is-outlined is-medium'><Link to='/AcceptedLoans'><strong>Pending Loans</strong></Link></button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined'>
            <button className='button is-text is-light is-bold is-outlined is-medium'><Link to='/RequestALoan'><strong>Request A Loan</strong></Link></button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined'>
            <button className='button is-text is-light is-bold is-outlined is-fullwidth is-medium'><Link to='/Members'><strong>Members</strong></Link></button>
          </div>
        </div>

      </div>
    </nav>
  </div>

)

export default Header
