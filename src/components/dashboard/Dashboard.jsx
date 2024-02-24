import { useState , useEffect } from "react"
import React from 'react'
import Viewrecipe from "./Viewrecipe";
import axios from "axios"

const Dashboard = () => {

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
  // console.log(recipes);


  // const [name, setName] = useState('');
  // const [rollNumber, setRollNumber] = useState('');
  // const [subjects, setSubjects] = useState([{ name: '', marks: '' }]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // console.log(subjects)
  //     // const response = await axios.post('/api/marksheet', {
  //     //   name,
  //     //   rollNumber,
  //     //   subjects
  //     // });
  //     // console.log(response.data);
  //     // You can handle success or display a success message here
  //   } catch (error) {
  //     console.error('Error submitting marksheet:', error);
  //     // You can handle errors here
  //   }
  // };

  // const handleSubjectChange = (index, key, value) => {
  //   const updatedSubjects = [...subjects];
  //   updatedSubjects[index][key] = value;
  //   setSubjects(updatedSubjects);
  // };

  // const addSubject = () => {
  //   setSubjects([...subjects, { name: '', marks: '' }]);
  // };

  // const removeSubject = (index) => {
  //   const updatedSubjects = [...subjects];
  //   updatedSubjects.splice(index, 1);
  //   setSubjects(updatedSubjects);
  // };

  return (
    <div className='items-center justify-center bg-green-400 lg:w-screen lg:flex lg:h-screen'>

    <div className="flex flex-wrap items-start justify-around py-2 bg-blue-300 lg:w-screen lg:h-5/6 ">
      {recipes.map((recipe)=>(

<Viewrecipe key={recipe._id} myrecipes={recipe}/>
      ))}
    </div>

  </div>
  );
}

export default Dashboard