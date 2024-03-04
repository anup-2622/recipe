import { useState, useEffect } from "react";
import React from "react";
import Viewrecipe from "./Viewrecipe";
import axios from "axios";
import Login from "../auth/Login";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import API from "../../APIs/API";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  // console.log(API + "/user/verify");

  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get(API+'/user/verify')
    .then(res=>{
      if(res.data.status)
      {
        
      }else{
        navigate('/login')
      }
    })
  },[])
  
  // useEffect(async () => {
  //   const verify = await axios.get(API + "/user/verify");
  //   // .then((res)=>{
  //   // console.log(verify);
  //   if (verify.data.status) {
  //     // useEffect(() => {
  //     // const fetchRecipes = async () => {
  //     //   try {
  //     //     const response = await axios.get(API+"/recipe/getAllRecipes");
  //     //     setRecipes(response.data.data);
  //     //   } catch (error) {
  //     //     console.error("Error fetching recipes:", error.message);
  //     //   }
  //     // };

  //     // fetchRecipes();
  //     // }, []);
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
  return (
    <>
      <div className="items-center justify-center bg-green-400 lg:w-screen lg:flex lg:h-screen">
        <div className="flex flex-wrap items-start justify-around py-2 bg-blue-300 lg:w-screen lg:h-5/6 ">
          {recipes.map((recipe) => (
            <Viewrecipe key={recipe._id} myrecipes={recipe} />
            // <PDFDownloadLink> Download </PDFDownloadLink>
          ))}
        </div>
      </div>
     <div>

     </div>
    </>
  );
};

export default Dashboard;
