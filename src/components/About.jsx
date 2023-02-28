import React from 'react'
import { Link } from 'react-router-dom'
import about  from "../images/about.png"
function About() {
  return (
    <div >
      <img src={about} alt="file" className='about-image' />
      <div className='about'>
      <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
      <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        <br />
      (Hitch costs extra 😉)
      <br/>
      <br/>
      Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      <div className='about-card'>
        <h3>Your destination is waiting.
          <br />
          Your van is ready.</h3>
        <Link className='btn' to="/vans" >Explore our vans</Link>

        </div>
      </div>
    </div>
  )
}

export default About