import React, { Component } from 'react'
import Header from './Header.jsx'

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <section className='hero is-fullheight-with-navbar is-primary is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                <strong>Welcome To Friendly Financing</strong>
              </h1>
              <h2 className='subtitle'>
                <strong>Where We Value Community!</strong>
              </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
