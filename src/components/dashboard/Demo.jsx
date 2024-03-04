import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProviders'
import {Navigate} from 'react-router-dom'

const Demo = () => {
    // const navigate = useNavigate()
    const {token , user} = useContext(AuthContext)
    console.log(user);

    const isLoggedin = !!token;
    useEffect(()=>{
        if(isLoggedin)
        {

            console.log("Hello");
        }

    },[])
    
  return (
    <div>
        {isLoggedin ? <div> Hello {user.name} to the private Demo</div>:
   <Navigate to='/login'/>

        }
    
    </div>
  )
}

export default Demo