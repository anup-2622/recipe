import React, { useState } from 'react'

const Recipe = () => {
  const [recipeName , setRecipeName] = useState('');
  const [ingredients , setIngredients] = useState([{name:'' , quantity: ''}]);
  const [steps , setSteps] = useState([{stepDetails: '' , file: null}]);

  const handleIngredientsChange = () => {
     
  }

  const removeIngredient = (index)=>{

    // console.log(index); 
    if(index >=1)
    {

      const updateIngredients = [...ingredients];

      updateIngredients.splice(index, 1);
      setIngredients(updateIngredients);
    }
  }
  
  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', marks: '' }]);
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-300 min-w-screen md:bg-red-300 md:w-screen md:h-screen'>
        <div className="bg-yellow-100 md:w-1/2 md:h-fit">
          <div className="py-2 my-2 font-serif text-3xl font-extrabold text-center">

              <h2>Add Your Recipe</h2>
          </div>
          <div className="flex items-center justify-center mx-2 md:h-full md:mx-0 ">
            <form action="">
                <div className="relative my-3 border md:w-80 lg:w-96 ">
                  <label htmlFor="recipeName" className='block w-full pb-1 font-serif text-sm group-focus-within:text-blue-400'>Recipe Name</label>
                  <input type="text" className='w-full p-1 outline-none' placeholder='Your Lovely Recipe ' />
                </div>
                {ingredients.map((ingredient , index )=>(

                  <div key={index} className="relative my-3 border md:w-fit lg:w-fit">
                  <label htmlFor="" className='block'>Ingredients</label>
                  <input 
                  type="text" 
                  className='w-42'
                   placeholder='Black Salt/Soda Lime'
                   value={ingredient.name}
                   onChange={(e)=> handleIngredientsChange(index, 'name' , e.target.value)} />
                  <input type="text"
                   placeholder='Quntity'
                   value={ingredient.quantity} 
                   onChange={(e)=>handleIngredientsChange(index, 'quantity' , e.target.value)}/>
                  <button
                  onClick={()=>removeIngredient(index)}
                  className='w-6 h-6 text-center border rounded-full button'>remove</button>

                </div>
                  ))}
                  <div>
                    <button type='button' onClick={addIngredient}>Add Ing</button>
                  </div>
                <div className="relative border">
                  <label htmlFor="" className='block'>Steps</label>
                  <input type="text" placeholder='Enter Your Step Details' />
                   <input type="file" name="" id="" />
                   <button className='w-5 h-5 text-center border rounded-full'>+</button>
                </div>
                <div className='relative border md:w-fit'>
                    <label htmlFor="" className='block'>Discription</label>
                    <textarea name="" id="" cols="" rows=""></textarea>
                </div>
                <div className="p-2 border">
                  <button>Add Recipe</button>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Recipe