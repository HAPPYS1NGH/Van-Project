import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className='orange-btn' path="/vans">Find your van</Link>
    </div>
  )
}

export default Home