import React from 'react'
import {useOutletContext} from 'react-router-dom'

function HostVanPricing() {
  const [currentVan] = useOutletContext();

  return (
    <section>
      <h4>{currentVan.price}$/day</h4>
    </section>
  )
}

export default HostVanPricing