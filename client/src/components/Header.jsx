import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

  <div>
    <nav className='navbar is-transparent is-left'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/'>
                Home
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
                Members
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/RequestALoan'>
                Request A Loan
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/RequestedLoans'>
                Requested Loans
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
                Created Loans
              </Link>
            </button>
          </div>
        </div>

        <div className='navbar-item'>
          <div className='button is-primary is-outlined is-small'>
            <button className='button is-text is-light is-bold is-outlined is-normal'>
              <Link to='/LoanAgreementTerms'>
                Terms Of Loan
              </Link>
            </button>
          </div>
        </div>

      </div>
    </nav>
  </div>

)

export default Header
