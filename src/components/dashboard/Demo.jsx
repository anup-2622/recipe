import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProviders'
import {Navigate} from 'react-router-dom'

const Demo = () => {
    // const navigate = useNavigate()
    const {isAuthenticated , user} = useContext(AuthContext)
    // console.log(user);
    // console.log(isAuthenticated);

    // const isLoggedin = !!token;
    // useEffect(()=>{
    //     if(isLoggedin)
    //     {

    //         console.log("Hello");
    //     }

    // },[])
    
  return (
    <div>
        {isAuthenticated()
         ?
          <div> Hello {user.name} to the private Demo</div>
          :
   <Navigate to='/login'/>

        }
    
    </div>
  )
}

export default Demo