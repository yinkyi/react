import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userInputIngredient,setUserInputIngredient] = useState([]);
  const addIngredientHandler=ingredients=>{
    setUserInputIngredient(prevStateInput=> [...prevStateInput,
                                            {id:Math.random().toString(),...ingredients}])
  };
  const removeItemHandler=(id)=>{
    const currentArr = userInputIngredient;
    const newArr = currentArr.filter((ele)=> ele.id !== id );
    setUserInputIngredient(newArr);
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient = {addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userInputIngredient} onRemoveItem={removeItemHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
