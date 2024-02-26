import { useState , useEffect } from "react"
import React from 'react'
import Viewrecipe from "./Viewrecipe";
import axios from "axios"
import Login from "../auth/Login";

const Dashboard = (props) => {

  const RecipeUrl = "http://localhost:9000/recipe/getAllRecipes";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(RecipeUrl);
        setRecipes(response.data.data);
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
      }
    };
    
    fetchRecipes();
  }, []);
  
//  console.log(props);
  return (
  <>
{props.auth ? 
    <div className='items-center justify-center bg-green-400 lg:w-screen lg:flex lg:h-screen'>


<div className="flex flex-wrap items-start justify-around py-2 bg-blue-300 lg:w-screen lg:h-5/6 ">
      {recipes.map((recipe)=>(
        
        <Viewrecipe key={recipe._id} myrecipes={recipe}/>
        ))}
    </div>

  </div>:
  <Login/>
}
</>
  );
}

export default Dashboard