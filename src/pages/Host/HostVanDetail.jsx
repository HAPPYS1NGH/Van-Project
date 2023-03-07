import React from 'react'
import {Link , NavLink , Outlet , useParams  } from "react-router-dom"

function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState([]);
    const {id} = useParams();
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`).then(
            res => res.json()
        ).then(
            data => setCurrentVan(data.vans[0])
        )
    } , [id])

    const vanElement = <div className='host-van-detail'>
        <img src={currentVan.imageUrl} alt="" />
        <div className='host-van-detail-info'>
        <i className={`${currentVan.type} i-btn`} >{currentVan.type}</i>
        <h2>{currentVan.name}</h2>
        <h4>${currentVan.price}<span className='van-text'>/day</span></h4>
        </div>
        </div>

  return (
    <>
    
    <div className='host-van-container'>
    <Link
    className='host-back'
        to=".."
        relative='path'
        >
           &larr; Back to all vans
    </Link>
    <div className='host-van-detail-outlet'>
        {vanElement}
        <nav>
        <NavLink
         to="."
         end
         style={({isActive}) => isActive ? activeStyle : null}
         >
          Details
      </NavLink>
      <NavLink
         to="pricing"
         style={({isActive}) => isActive ? activeStyle : null}
         >
          Pricing
      </NavLink>
      <NavLink
         to="photos"
         style={({isActive}) => isActive ? activeStyle : null}
         >
          Photos
      </NavLink>
            
        </nav>
        < Outlet context={[currentVan]} />
    </div>
    
    </div>
    </>
  )
}

export default HostVanDetail