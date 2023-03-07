import React from 'react'
import {Link} from 'react-router-dom'

function HostVans() {

    const [vans , setVans] = React.useState([]);

    React.useEffect(()=>{
        fetch("/api/host/vans").then(
            res => res.json()
        ).then(
            data => setVans(data.vans)
        )
    }, [])

    const vanElement = vans.map((van)=>{
        return(
            <Link to={`${van.id}`} >
            <div key={van.id}>
                <div className='host-van'>
                    <img src={van.imageUrl}  alt="" />
                    <div className='host-van-name'>
                    <h4>{van.name}</h4>
                    <p>${van.price}<span>/day</span></p>
                    </div>
                </div>
            </div>
            </Link>)
    })

  return (
    <div className='host-vans'>
        <h2>Your Listed Vans</h2>
        {
         vans.length > 0 ?
            ( <div>{vanElement}</div>)
            : 
            ( <h1>Loading</h1>)
}
    </div>
  )
}

export default HostVans