import React, { useContext } from 'react'
import { Navbar } from '../navbar/Navbar'
import { AuthContext } from '../../context/AuthProviders'

const Index = () => {
    const {user , token} = useContext(AuthContext)

  return (
    <>
        <Navbar/>
        {user.name}
    </>
  )
}

export default Index