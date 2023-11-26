import { useEffect, useState } from 'react';
import './App.css';
import MyRecComponent from './MyRecComponent';
import lupa from "./icons8-search.gif"

// 1. API link
// https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=aadc2b20&app_key=%20ad3d8d01fdf9555f6a5922e886fe7b9f%09
// separate const for ID. KEY 
// change our API Link with MY_ID, MY_KEY, changeable search word: ${MY_ID} ${MY_KEY} ${wordSubmitted}
// обрати внимание на кавычки в fetch!!!!
// API -> useEffect()
// state for input and value = {mySearch}

function App() {

  const MY_ID = "b158b48c";
  const MY_KEY = "e43a73e4bb609a4efa3f6f3dfd5d3ec8";

  const [wordSubmitted, setWordSubmitted] = useState("poke bowl");
  const [mySearch, setMySearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() =>{
    const getRecipe = async() =>{
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      setMyRecipe(data.hits)
    }
    getRecipe()
  } , [wordSubmitted] )

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }
  const finalSearch = (e) =>{
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div >

      <div className="App" >
        <h1>Find Your Recipe</h1>
      </div>

      <div className='InputButton' >

        <form onSubmit={finalSearch} >
          <input onChange={myRecipeSearch} value = {mySearch} placeholder='Search for anything' />
          <button onClick={finalSearch} className='buttonMain' >
          <img  src= {lupa} alt="lupa" className='lupa' />
        </button>

        </form>

      </div>


      <div className='CardOfRecipes'>

      {myRecipe.map((element,index) => ( 
    
        <MyRecComponent key={index}
                        propsForLabel={element.recipe.label} 
                        propsForImage={element.recipe.image}
                        propsForCuisinType={element.recipe.cuisineType}
                        propsForIngredients= { element.recipe.ingredientLines }
                        propsForDietLabels= { element.recipe.dietLabels}
                        propsForCalories= { element.recipe.calories}
                        propsForMealType= { element.recipe.mealType}
                        propsForUrl= {element.recipe.url}
                        />
                                            
      )) }
    </div>

    </div>
  );
}

export default App;
