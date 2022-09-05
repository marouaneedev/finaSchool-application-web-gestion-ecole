import React from 'react'
import { Link } from "react-router-dom";
import './pageNotFound.css'

function PageNotFound() {
    return (
        <div className='notFound'>
            <div className='content'>
                <h1>404 Page Not Found !</h1>
                <Link to="/dashboard">go back</Link>
            </div>
        </div>
    )
}

export default PageNotFound