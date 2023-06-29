import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <center>
                <nav>
                    <NavLink to="/" className="m-5">DashBoard</NavLink>
                    <NavLink to="/home" >Profiles</NavLink>



                </nav>
            </center>
        </div>
    )
}
