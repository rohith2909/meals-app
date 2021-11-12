import React ,{useState, useEffect, useCallback, useContext} from 'react';
import { Dialog, DialogTitle, DialogContent} from '@mui/material';
import './MealContent.css';
import { myContext } from '../Context/Context';


export default function MealContent(props) {
    const { title, openPopup, setOpenPopup} = props;
    const { getMealRecipe, recipe} =  useContext(myContext);
    const mealRecipeHandler = useCallback(() => {
        getMealRecipe();
    },)

    return (
       <Dialog open ={openPopup}>
           <DialogTitle>
               <div>Title Goes Here...</div>
           </DialogTitle>
           <DialogContent className="meal-detail-content">
               <button 
               type="button" 
               className="btn recipe-close-btn" 
               id="recipe-close-btn">
                   <i className="fas-fa-times"></i>
               </button>
           <div >
            <h2 className="recipe-title"> Meals Name here</h2>
            <p className="recipe-category">Category Name here</p>
            <div className="recipe-intructions">
                <h3>Intructions</h3>
                <p>Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.</p>
            </div>
            <div className="recipe-meal-img">
                <img src="" alt=""/>
            </div>
            <div className="recipe-link">
                <a href="#" target="_blank">Watch Video</a>
            </div>
        </div>
           </DialogContent>
       </Dialog>
    )
}
