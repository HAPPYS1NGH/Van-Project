import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const [currentVan] = useOutletContext();

  return (
    <section>
      <img src={currentVan.imageUrl} width={100} alt="" />
    </section>
  )
}

export default HostVanPhotos