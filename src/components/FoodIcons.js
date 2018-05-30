import React from 'react';

import vegIcon from '../Icons/veg.jpg';
import nonVegIcon from '../Icons/non-veg.png';
import spicyIcon from '../Icons/chilli.png';


 export const vegNonVeg = (nonVeg, spicy) =>{
  if(!nonVeg){
    return(
      <div className='inlineBlock'>
        <img src = {vegIcon} style={{'verticalAlign': 'right', 'height':'10px', 'width': '10px'}} />Veg
         {spicyImage(spicy)}
      </div>
    );
  }
  else {
    return(
      <div className='inlineBlock'>
        <img src = {nonVegIcon} style={{'verticalAlign': 'right', 'height':'10px', 'width': '10px'}} />Non-Veg
        {spicyImage(spicy)}
      </div>
    );
  }
}

const spicyImage = (spicy) =>{
  if(spicy){
    return(
      <div className='inlineBlock'>
        <img src = {spicyIcon} style={{'verticalAlign': 'right', 'height':'10px', 'width': '10px'}} />Spicy
      </div>
    );
  }
  return null;
}
