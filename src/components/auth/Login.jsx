import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email + password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/user/login", {
        email,
        password,
      });
      if (response.data.message == "Authentication Successful") {
        history("/dashboard");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center max-w-full min-h-screen bg-blue-300 md:items-center md:justify-center md:h-screen ">
      <div className="flex flex-col w-full m-auto mx-2 border rounded-lg h-fit md:w-2/5 md:h-1/2">
        <div className="py-2 my-2 font-serif text-3xl font-extrabold text-center ">
          <p>LOGIN</p>
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
              <div className=" text-end">
                <a href="" className="text-xs text-none">
                  
                forgot password
                </a>
              </div>
            </div>
            <div className="my-3 group w-72 md:-80 lg:w-96">
              <button
                type="submit"
                className="p-2 px-4 bg-blue-400 border rounded-md hover:bg-blue-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
