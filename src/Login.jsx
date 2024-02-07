import React, { useState } from 'react'
import  axios  from 'axios';

const Login = () => {

    const [email ,setEmail] = useState('');
    const [ password ,setPassword] = useState('')

    // console.log(email + password);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:9000/user/login' , {email , password});
            console.log(response);
        }
        catch(error)
        {
            console.log(error.response.data.error);
        }
    }
  return (
    <div>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login