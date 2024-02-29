import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function ForgotPassword() {
    const [email , setEmail] = useState('');

const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
          const forgotData = await axios.post("http://localhost:9000/user/forgotpassword",{
            email 
          } )
          // console.log(forgotData);
       
          if(forgotData.data.status){
         
            navigate("/login")
          }
          // console.log(forgotData.data);
          
        }catch(error)
        {
          console.log(error)
        }
    }
    return (
        <div className="flex justify-center max-w-full min-h-screen bg-blue-300 login md:items-center md:justify-center md:h-screen ">
          <div className="flex flex-col w-full m-auto mx-2 border rounded-lg shadow-md shadow-black backdrop-blur-lg h-fit md:w-2/5 md:h-fit">
            <div className="py-2 my-2 font-serif text-3xl font-extrabold text-center text-white ">
              <p>Forgot Password</p>
            </div>
            <div className="flex items-center justify-center mx-2 md:h-full md:mx-0">
              <form action="" onSubmit={handleSubmit}>
                <div class="group relative w-72 my-3 md:w-80 lg:w-96">
                  <label
                    htmlFor="email"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Email
                  </label>
                  <input
                    className="w-full h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                    type="email"
                    id="email"
                    value={email}
                    placeholder="John@mail.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
    
             
                <div className="my-3 group w-72 md:-80 lg:w-96">
                  <button
                    type="submit"
                    className="w-full py-2 font-medium bg-blue-400 rounded-md text-2lg hover:bg-blue-300"
                  >
                   Forgot Password
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      );
}
