import React from 'react'
import {Outlet , NavLink} from 'react-router-dom'
function HostLayout() {
  return (
    <div>
        <nav className='host-nav'> 
            <NavLink
                 to="."
                 end
                 className={({isActive})=> isActive ? "active-nav" : ""}
                >Dashboard
            </NavLink>
            <NavLink
                  to="income"
                  className={({isActive})=> isActive ? "active-nav" : ""}
                >
                    Income
            </NavLink>
            <NavLink
                 to="vans"
                 className={({isActive})=> isActive ? "active-nav" : ""}
                 >
                    Vans
            </NavLink>
            <NavLink
                 to="reviews"
                 className={({isActive})=> isActive ? "active-nav" : ""}
                 >
                    Reviews
            </NavLink>
        </nav>
        <Outlet/>
    </div>
    
  )
}

export default HostLayout