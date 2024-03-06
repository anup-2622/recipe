import { useState, useEffect, useContext } from "react";
import React from "react";
import Viewrecipe from "./Viewrecipe";
import axios from "axios";
import Login from "../auth/Login";
import { Navigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import API from "../../APIs/API";
import { AuthContext } from "../../context/AuthProviders";

const Dashboard = (props) => {
  
  const {user , isAuthenticated} = useContext(AuthContext)

  const [recipes, setRecipes] = useState([]);

  axios.defaults.withCredentials = true;
  // useEffect(()=>{
  //   axios.get(API+'/user/verify')
  //   .then(res=>{
  //     if(res.data.status)
  //     {
  //     }else{
  //       navigate('/login')
  //     }
  //   })
  // },[])
  
  // useEffect(async () => {
  //   const verify = await axios.get(API + "/user/verify");
  //   // .then((res)=>{
  //   // console.log(verify);
  //   if (verify.data.status) {
    //   } else {
      //     navigate("/login");
      //   }
      //   // })
      //   return ()=>{}
      // },[]);
      
      //  console.log(props);
      
      
      // useEffect(() => {
        //   let source = axios.CancelToken.source();
        
        //   const fetchData = async () => {
//     try {
//       const verify = await axios.get(API+"/user/verify", {
  //         cancelToken: source.token
  //       });
  //       if (verify.data.status) {
//         // Do something
//       } else {
//         navigate("/login");
//       }
//     } catch (error) {
//       if (axios.isCancel(error)) {
//         console.log("Request canceled", error.message);
//       } else {
//         console.error("Error fetching data:", error);
//       }
//     }
//   };

//   fetchData();

//   return () => {
  //     source.cancel("Component unmounted, canceling axios request");
  //   };
  // }, []);
  useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API+"/recipe/getAllRecipes");
      setRecipes(response.data.data);
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
    }
  };
  
  fetchRecipes();
  }, []);
  return (
    <>
  
    { isAuthenticated() 
    ? 
      <div className="items-center justify-center lg:w-screen lg:flex lg:h-screen">
        <div className="flex flex-wrap items-start justify-around py-2 lg:w-screen lg:h-5/6 ">
          {recipes.map((recipe) => (
            <Viewrecipe key={recipe._id} myrecipes={recipe} />
            // <PDFDownloadLink> Download </PDFDownloadLink>
            ))}
        </div>
      </div>
     
       : <Navigate to='/login' />}
    </>
  );
};

export default Dashboard;
