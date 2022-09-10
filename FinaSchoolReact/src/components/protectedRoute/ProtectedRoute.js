import React, {useContext, useState, useEffect} from 'react'
import { PetDataContext } from '../../pages/login/Login'
// import { Navigate } from 'react-router-dom'
import axios from 'axios';

function ProtectedRoute() {
    const [user, setUser] = useState({});
    const { hhhh } = useContext(PetDataContext);

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/1')
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    console.log(hhhh)

    return (
        <p>hhhfhrf {user.userName}</p>
        
    )


}

export default ProtectedRoute