import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

  <div>
    <nav className='navbar is-transparent is-center'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/'>
                <strong>Home</strong>
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/BecomeAMember'>
                Become A Member
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/Members'>
                <strong>Members</strong>
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/RequestALoan'>
                <strong>Request A Loan</strong>
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/RequestedLoans'>
                <strong>Requested Loans</strong>
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/PendingLoaneeApproval'>
                Pending Loanee Approval
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/LoansCreated'>
                <strong>Created Loans</strong>
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/LoanAgreementTerms'>
                <strong>Terms Of Loan</strong>
              </Link>
            </button>
          </div>
        </div>

      </div>
    </nav>
  </div>

)

export default Header
