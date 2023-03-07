
import React from 'react'
import {useOutletContext} from 'react-router-dom'

function HostVanInfo() {
  const [currentVan] = useOutletContext();
  return (
    <div  className='host-van-info-page'>
        <p>Name: {currentVan.name}</p>
        <p>Category: {currentVan.type}</p>
    </div>
  )
}

export default HostVanInfo