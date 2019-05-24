import React, { Component } from 'react'
import Header from './Header.jsx'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <section className='hero is-medium is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
        Welcome To Friendly Financing
              </h1>
              <h2 className='subtitle'>
        Where We Value Community!
              </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
