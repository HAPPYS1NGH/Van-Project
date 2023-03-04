import React from 'react'
import { useParams } from 'react-router-dom'

function VanDetail() {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`).then(
            res => res.json()
        ).then(
            data => setVan(data.vans)
        )
    },[params.id])
  return (
    <div className='van-detail'>
        {van ?
    (
        <div>
        <img src={van.imageUrl} alt="van" />
        <i className={`${van.type} i-btn`}>{van.type}</i>
        <h2>{van.name}</h2>
        <h4>{van.price} <span className='van-text'>/day</span> </h4>
        <p>{van.description}</p>
        <button className='orange-btn'>Rent this Van</button>
    </div>)
    : <h2>Loading</h2>}
    </div>
    
  )
}

export default VanDetail