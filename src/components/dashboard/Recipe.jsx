import React, { useState   } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import {useNavigate ,Link} from 'react-router-dom'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useAuth } from "../../context/AuthProviders";
import API from "../../APIs/API";


const Recipe = () => {

  const navigate = useNavigate()


  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [steps, setSteps] = useState([{ stepDetails: "", file: null }]);
  const [description , setDescription] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myRecipe = await axios.post(API+'/recipe/createRecipe', {
        recipeName,
        ingredients,
        steps,
        description,
      });
      setRecipeName("");
      setSteps([{ stepDetails: "", file: null }])
      setIngredients([{ name: "", quantity: "" }])
      setDescription('');
 
      console.log('Recipe added successfully:', myRecipe.data);
      toast.success("Recipe Submitted")
      // Clear form fields and show success message
    } catch (error) {
      console.error('Error adding recipe:', error);
      // Handle error appropriately (e.g., show error message)
    }
  };

  const handleIngredientsChange = (index, key, value) => {
    const updateIngredients = [...ingredients];
    updateIngredients[index][key] = value;
    setIngredients(updateIngredients);
  };
  const handleStepDetails = (index, key, value) => {
    const updateSteps = [...steps];
    updateSteps[index][key] = value;
    setSteps(updateSteps);
  };

  const removeIngredient = (index) => {
    if (index >= 1) {
      const updateIngredients = [...ingredients];

      updateIngredients.splice(index, 1);
      setIngredients(updateIngredients);
    }
  };
  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const removeSteps = (index) => {
    if (index >= 1) {
      const updateSteps = [...steps];
      updateSteps.splice(index, 1);
      setSteps(updateSteps);
    }
  };

  const addStep = () => {
    setSteps([...steps, { stepDetails: "", file: "" }]);
  };



  return (

    <div className="w-full h-full recipe scroll-smooth lg:h-screen lg:w-screen md:w-screen md:h-screen">
      
      <div className="flex items-center justify-center border lg:justify-center backdrop-blur-md ">
        <div className=" lg:w-5/6">
          <div className="py-2 my-2 font-serif text-xl font-extrabold text-center text-white lg:text-center md:text-center md:text-2xl lg:text-3xl">
            <h2>Add Your Recipe</h2>
          </div>
          <div className=" md:h-full md:mx-2 lg:mx-2">
            <form action="" onSubmit={handleSubmit}>
              <fieldset className="px-5 my-1 border rounded-md">
                <legend className="px-3 py-1 text-white rounded-md bg-zinc-800">
                  Recipe Name
                </legend>
                <div className="my-1 md:w-full lg:w-full">
                  <input
                    type="text"
                    className="w-full h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Lovely Recipe "
                    value={recipeName}
                    required
                    onChange={(e) => setRecipeName(e.target.value)}
                  />
                </div>
              </fieldset>
              <fieldset className="px-5 my-1 border rounded-md">
                <legend className="px-3 py-1 text-white rounded-md bg-zinc-800">
                  Ingredients
                </legend>

                <div className="flex flex-wrap items-center">
                  {ingredients.map((ingredient, index) => (
                    <div  
                      key={index}
                      className="flex items-center gap-2 my-1 md:border-none md:w-2/4 lg:w-1/3"
                    >
                      <input
                        type="text"
                        className="w-40 h-8 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                        placeholder="Black Salt/Soda Lime"
                        required
                        value={ingredient.name}
                        onChange={(e) =>
                          handleIngredientsChange(index, "name", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        className="w-40 h-8 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                        placeholder="Quntity"
                        required
                        value={ingredient.quantity}
                        onChange={(e) =>
                          handleIngredientsChange(
                            index,
                            "quantity",
                            e.target.value
                          )
                        }
                      />
                      {index >= 1 ? (
                        <button
                          onClick={() => removeIngredient(index)}
                          className="p-2 font-extrabold text-center text-white bg-red-500 border-none rounded hover:bg-red-400 w-fit "
                        >
                          <IoRemoveCircleOutline />
                        </button>
                      ) : (
                        <button
                        type="button"
                        className="p-2 font-bold text-white bg-green-500 rounded hover:bg-green-400 px3 w-fit"
                        onClick={addIngredient}
                        >
                          <IoAddCircleOutline />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset className="px-5 my-1 border rounded-md">
                <legend className="px-3 py-1 text-white rounded-md bg-zinc-800">
                  STEPS
                </legend>
                <div className="flex flex-wrap items-center">
                  {steps.map((step, index) => (
                    <div
                    key={index}
                    className="flex items-center gap-1 my-1 md:border-none md:w-1/2 lg:w-1/3"
                    >
                      <input
                        type="text"
                        className="w-40 h-8 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                        value={step.stepDetails}
                        required
                        onChange={(e) =>
                          handleStepDetails(
                            index,
                            "stepDetails",
                            e.target.value
                          )
                        }
                        placeholder="Enter Your Step Details"
                      />
                  <input
    type="file"
    class="block w-44 text-sm text-white
        file:mr-4 md:file:mr-2  file:h-8 file:px-2 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-pink-50 file:text-black-400
        hover:file:bg-pink-100 md:w-1/2 lg:w-44"
        required
        value={step.file}
        onChange={(e) =>
          handleStepDetails(index, "file", e.target.value)
        }
  />
                      {index >= 1 ? (
                        <button
                        onClick={() => removeSteps(index)}
                        className="p-2 text-center bg-red-500 rounded hover:bg-red-400 w-fit"
                        >
                          <IoRemoveCircleOutline />
                        </button>
                      ) : (
                        <button
                        type="button"
                          className="p-2 text-white bg-green-500 rounded hover:bg-green-400 w-fit"
                          onClick={addStep}
                        >
                          <IoAddCircleOutline className="" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>

              <fieldset className="px-5 my-1 border rounded-md">
                <legend className="px-3 py-1 text-white rounded-md bg-zinc-800">
                  Discription
                </legend>
                <div className="relative my-2 rounded-md md:w-full">
                  <textarea
                    name=""
                    value={description}
                  
                    onChange={(e) => setDescription(e.target.value)}
           
                    rows="4"
                    className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-900 bg-white border-0 rounded-md focus:ring-0"
                    placeholder="Write more Descripotion.................. "
                  ></textarea>
                </div>
              </fieldset>
              <div className="flex items-center justify-center my-2 lg:justify-end md:justify-end ">
                <button
                  type="submit"
            
                  className="p-2 bg-green-400 rounded-md hover:bg-green-300"
                >
                  Add Recipe
                </button>
                <Toaster />
       </div>
            </form>
          </div>
        </div>
      </div>

      <Link to='/dashborad'>Dashboard</Link>
      
    </div>
  );
};

export default Recipe;
