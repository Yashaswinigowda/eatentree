
import React from 'react';
import '../App.css';
import {vegNonVeg} from './FoodIcons';

const FoodList = ({ foods, indexValue, selectedFood })=> {
  return(
    <div className='grid-item'>
      <img src={foods.image} alt='' width="200" className="img-responsive" height="200" />
      <p> {foods.name} </p>
      {vegNonVeg(foods.nonVeg, foods.spicy)}
      <input type="button" value="View Details" style={{ 'backgroundColor':'#FF4500', 'fontFamily': ` 'Arvo', serif` }} onClick={() =>selectedFood(indexValue)}/>
    </div>
  );
}

export default FoodList;


// <img scr="http://lorempixel.com/640/480/food" alt='' width="200" className="img-responsive" height="200" />
