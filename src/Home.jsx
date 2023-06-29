import React from 'react'
import data from './UserList'
import { Link } from 'react-router-dom'

export default function Home() {


    return (
        <div>
            <center>
                <h5 className='mt-5'>List profile names</h5>
                {
                    data.map((val) => {
                        return (<div>ProfileName:<span className='text-danger'> {val.name}</span>
                            <button className='btn btn-primary m-3'><Link className="text-white text-decoration-none" to={`/profile/${val.id}`} key={val.id}>check <span style={{ textDecoration: "underline" }}>{val.name}</span> profile</Link></button></div>)


                    })
                }

            </center >
        </div >
    )
}
