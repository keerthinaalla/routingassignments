import React, { useState, useEffect } from 'react'
import data from './UserList';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




export default function ProfileList() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const userData = data.find((user) => user.id === parseInt(id));
        console.log(userData)
        if (userData) {
            setUser(userData);
        }

    }, [id])
    function handleClick() {
        navigate('/home');
    }



    return (
        <div>

            <>
                {id}
                <div className='card col-lg-4' style={{ margin: "0 auto" }}>
                    <div className='card-body'>
                        <h1>{user.name}</h1>
                        <h2>{user.phone}</h2>
                        <h3>{user.country}</h3>
                        <h3>{user.email}</h3>
                    </div>
                </div>
                <button className="btn btn-primary" style={{ marginLeft: "45%", marginTop: '3%' }} onClick={handleClick}>Back to Profiles</button>
            </>


        </div>
    )
}

