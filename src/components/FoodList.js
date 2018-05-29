
import React from 'react';
import '../App.css';

const FoodList = ({ foods, indexValue, selectedFood })=> {
  return(
    <div className='grid-item' onClick={() => selectedFood(indexValue)}>
      <p> {foods.name} </p>
      <img src={foods.image} alt='' width="200" className="img-responsive" height="200" />
    </div>
  );
}

export default FoodList;


// <img scr="http://lorempixel.com/640/480/food" alt='' width="200" className="img-responsive" height="200" />
