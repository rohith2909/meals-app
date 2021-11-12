import React ,{useState, useEffect, useCallback, useContext} from 'react';
import './HomePage.css';
import { myContext } from '../Context/Context';
import MealContent from '../MealContent/MealContent';


const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { fetchHomePageMeals, meals } = useContext(myContext);
    

    const fetchMealsHandler = useCallback(() => {
        fetchHomePageMeals(searchTerm);
    }, [searchTerm, fetchHomePageMeals]);
    
   
    const [openPopup, setOpenPopup] = useState(false);
    

    return (
        <div className="home">
            <div classname="home">
         <input 
         type="text" 
         placeholder="Enter meal Name..." 
         value={searchTerm}
         className="home-input"
         onChange= {(e) => setSearchTerm(e.target.value) }/>
        <button className="home-button" onClick={fetchMealsHandler}>Search Meal</button>
        </div>
        <div className = "home-grid"
        onClick = {() => setOpenPopup(true)}
        >
        {meals? (
            meals.map((meal) => (
                <div className="home-meals" key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt="#"/>
                    <h4>{meal.strMeal}</h4>
                </div>
            ))
        ) : (
            <h2>Search Details Not Found! Try Another Word...</h2>
        )}

        </div>
        <MealContent 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}>
            
        </MealContent>

        </div>
        
        
    )
}

export default HomePage
