
import React from 'react'
import {useOutletContext} from 'react-router-dom'

function HostVanInfo() {
  const [currentVan] = useOutletContext();
  return (
    <section  className='host-van-info-page'>
        <p><span>Name:</span> {currentVan.name}</p>
        <p><span>Category:</span> {currentVan.type}</p>
        <p><span>Description:</span> {currentVan.description}</p>
        <p><span>Visibility:</span> Public</p>

    </section>
  )
}

export default HostVanInfo