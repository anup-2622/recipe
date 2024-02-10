import React, { useState } from 'react'

const Signup = () => {
    

const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

    const handleSubmit =()=>{
        
    }
    return (
    <div>
           <div className="flex justify-center max-w-full min-h-screen bg-blue-300 md:items-center md:justify-center md:h-screen ">
      <div className="flex flex-col w-full m-auto mx-2 border rounded-lg h-fit md:w-2/5 md:h-fit">
        <div className="py-2 my-2 font-serif text-3xl font-extrabold text-center ">
          <p>Create Your Account</p>
        </div>
        <div className="flex items-center justify-center mx-2 md:h-full md:mx-0">
          <form action="" onSubmit={handleSubmit}>
            <div class="group relative w-72 my-3 md:w-80 lg:w-96">
              <label
                htmlFor="name"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
              >
                Name
              </label>
              <input
                className="w-full h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                type="text"
                id="name"
                value={name}
                placeholder="John"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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

            <div className="relative my-3 group w-72 md:w-80 lg:w-96">
              <label
                htmlFor="password"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                id="password"
                value={password}
                placeholder="**********"
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
            
            </div>
            <div className="my-3 group w-72 md:-80 lg:w-96">
              <button
                type="submit"
                className="w-full py-2 font-medium bg-blue-400 rounded-md text-2lg hover:bg-blue-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-col items-center justify-center mx-2 md:h-full md:mx-0">
          <div className="flex items-center w-full py-3 justify-evenly">

            <div className="p-2 border rounded-md">google</div>
            <div className="p-2 border rounded-md">Github</div>
            <div className="p-2 border rounded-md">facebook</div>
          </div>
        <div className="m-3 text-center md:f-full md:mx-0">
          <p className="text-gray-200 ">Already have an account ? <a href="" className="text-blue-900 ">Login</a> </p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup