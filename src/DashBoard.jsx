import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DashBoard() {
    return (
        <div className='m-5'>
            <center>
                <h1>This is dashboard</h1>
                <NavLink to="/home" >Profiles</NavLink>
            </center>
        </div>
    )
}
