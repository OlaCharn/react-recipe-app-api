import kitchenIcon from "./icons8-kitchen-50.png";
import forkIcon from "./icons8-dining-room-64.png";
import dietType from "./icons8-leaf-32.png";

function MyRecComponent( {propsForLabel, propsForImage, propsForCuisinType , propsForIngredients, propsForDietLabels, propsForCalories, propsForMealType, propsForUrl } ){
    return(
        <div > 
        <div  className="card">
            <div>
                <img src={propsForImage} alt="food" width="300px" height="300px" className="imgLabel"  />
            </div>
            <div className="diets kitchen">
                <p ><img src= { kitchenIcon } width="20px" alt="icon" />{ propsForCuisinType.map((cuisine, id) => {
                    return cuisine[0].toUpperCase() + cuisine.slice(1)
                }) }
                </p>
                <p className="diet" ><img src={ forkIcon } width="20px" alt="icon" />{ propsForMealType.map((meal,id)=> {
                    return meal[0].toUpperCase() + meal.slice(1)
                }) }
                </p>
            </div>


            <div className="diets">
                <div className="tooltip-right">
                    <p className="kcal">{ propsForCalories.toFixed() } KCAL</p>
                </div>

                <div className="diets kitchen diet" >{ propsForDietLabels.map((diet,id) => (
                    <span key={id} className="diet" ><img src={ dietType } width="20px" alt="icon" />{ diet }</span>
                )) }
                </div>
            </div>


            <div className="Label">
                <h2> {propsForLabel} </h2>
            </div>

            <div className="Ing"> 
                <h3>Ingredients</h3>
                <ul className="list"> 
                    { propsForIngredients.map((ingredient,id) =>( 
                        <li key={id} > {ingredient} </li>
                    ))}
                </ul>
            </div>

            <div className="Method">
                <h3>Method </h3>
                <button className="ButtonOpenMe" ><a href= { propsForUrl }>cook me</a>  </button>
            </div>

        </div>
        </div>
    )
}
export default MyRecComponent;