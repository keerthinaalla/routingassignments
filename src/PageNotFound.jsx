import React from 'react';
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <center>
                <h1>page not found </h1>
                <Link to="/">Go to Homepage</Link>
            </center>
        </div>
    )
}
