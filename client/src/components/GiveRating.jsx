import React, { Component } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'

class GiveRating extends Component {
  render () {
    return (
      <div>
        <Header />
        <section className='hero is-small is-primary is-bold is-center'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Accepted Loans and Rating
              </h1>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default GiveRating
