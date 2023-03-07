import React from 'react'
import { Link } from "react-router-dom"

function Vans() {

  const [vans , setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])


  const vanElements = vans.map((van)=>{
    return(
      <div className='van' key={van.id}>
        <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt="Van" />
        <h4>{van.name}</h4>
        <h4>{van.price} <span className='van-text'>$/day</span></h4>
        <i className={`${van.type} i-btn`} >{van.type}</i>
      </Link>
      </div>
    )
  })

  return (
    <div className='vans' >
      <h2  >Explore our van options</h2>
      <div className='container-vans'>{vanElements}</div>
    </div>
  )
}

export default Vans