import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProviders'
import {Navigate} from 'react-router-dom'

const Demo = () => {
    const {isAuthenticated , user} = useContext(AuthContext)

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