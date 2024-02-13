import React, { useState } from "react";
import { FaFile } from "react-icons/fa";

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const Recipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [steps, setSteps] = useState([{ stepDetails: "", file: null }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const recipeRes = await Axios.post();

      console.log(recipeName);
      setRecipeName("");
      // setIngredients('');
      // setSteps('');
    } catch (error) {
      console.log(error);
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
      <div className="flex items-center justify-center backdrop-blur-md ">
        <div className=" lg:w-5/6">
          <div className="py-2 my-2 font-serif text-xl font-extrabold text-white lg:text-center md:text-center md:text-2xl lg:text-3xl">
            <h2>Add Your Recipe</h2>
          </div>
          <div className="mx-2 md:h-full md:mx-0">
            <form action="" onSubmit={handleSubmit}>
              <div className="my-3 border md:w-full lg:w-full">
                <label
                  htmlFor="recipeName"
                  className="block w-full pb-1 font-serif text-sm group-focus-within:text-blue-400"
                >
                  Recipe Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Lovely Recipe "
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                />
              </div>
              <fieldset className="px-5 border rounded-md">
                <legend className="px-3 py-1 text-white rounded-md bg-zinc-800">
                  Ingredients
                </legend>

                <div className="flex flex-wrap">
                  {ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="my-1 border md:border-none md:w-fit lg:w-fit"
                    >
                      <input
                        type="text"
                        className="h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                        placeholder="Black Salt/Soda Lime"
                        value={ingredient.name}
                        onChange={(e) =>
                          handleIngredientsChange(index, "name", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        className="h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                        placeholder="Quntity"
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
                          className="h-10 px-3 text-center text-white bg-red-600 border rounded w-fit button"
                        >
                          <IoRemoveCircleOutline />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="p-2 bg-green-500 rounded w-fit"
                          onClick={addIngredient}
                        >
                          <IoAddCircleOutline />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset className="px-5 border rounded-md">
                <legend className="px-3 py-1 text-white rounded-md bg-zinc-800">
                  STEPS</legend>
                <div className="flex flex-wrap ">
                  {steps.map((step, index) => (
                    <div key={index} className="flex border">
                      {/* <label
                    htmlFor=""
                    className="block pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out w-fit group-focus-within:text-blue-400"
                  > */}
                      {/* Steps */}
                      <input
                        type="text"
                        className="h-10 px-4 font-thin transition-all duration-200 ease-in-out rounded-md outline-none w-fit peer bg-gray-50 drop-shadow-sm focus:bg-white focus:ring-2 focus:ring-blue-400"
                        value={step.stepDetails}
                        onChange={(e) =>
                          handleStepDetails(
                            index,
                            "stepDetails",
                            e.target.value
                          )
                        }
                        placeholder="Enter Your Step Details"
                      />
                      {/* </label> */}
                      <label class="flex flex-col w-fit h-fit p-2 items-center text-center justify-center bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                        <span class="">
                          <FaFile />
                        </span>
                        <input
                          type="file"
                          value={step.file}
                          onChange={(e) =>
                            handleStepDetails(index, "file", e.target.value)
                          }
                          class="hidden"
                        />
                      </label>

                      {/* <label htmlFor="" className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-white border rounded-lg shadow-lg cursor-pointer text-blue border-blue hover:bg-blue hover:text-white">
                <span class="mt-2 text-base leading-normal">Select a file</span>
                <input
                  type="file"
                  e}
                onChange={(e) =>
                  handleStepDetails(index, "file", e.target.value)
                }
                  className="hidden "
                  name=""
                  id=""
                />
                </label> */}
                      {index >= 1 ? (
                        <button
                          onClick={() => removeSteps(index)}
                          className="p-2 text-center bg-red-400 border rounded w-fit"
                        >
                          <IoRemoveCircleOutline />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="p-2 bg-green-500 rounded w-fit"
                          onClick={addStep}
                        >
                          <IoAddCircleOutline />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="relative border md:w-fit">
                <label htmlFor="" className="block">
                  Discription
                </label>
                <textarea name="" id="" cols="" rows=""></textarea>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="p-2 bg-green-400 border rounded-md hover:bg-green-300"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
