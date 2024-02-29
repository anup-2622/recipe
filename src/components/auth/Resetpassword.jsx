import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Resetpassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { token } = useParams();

//   console.log(token, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resetPassword = await axios.post(
        `http://localhost:9000/user/resetPassword/${token}`,
        {
          password,
        }
      );
      //   toast.success(signupData.data.message)
      if (resetPassword.data.status) {
        navigate("/login");
      }
      console.log(resetPassword.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center max-w-full min-h-screen bg-blue-300 signup md:items-center md:justify-center md:h-screen ">
        <div className="flex flex-col w-full m-auto mx-2 border rounded-lg shadow-lg h-fit backdrop-blur-lg shadow-black md:w-2/5 md:h-fit">
          <div className="py-2 my-2 font-serif text-3xl font-extrabold text-center text-white ">
            <p>Reset Your Password</p>
          </div>
          <div className="flex items-center justify-center mx-2 md:h-full md:mx-0">
            <form action="" onSubmit={handleSubmit}>
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
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Toaster/> */}
    </>
  );
};

export default Resetpassword;
