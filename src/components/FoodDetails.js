import React from 'react';
import '../App.css';
import {vegNonVeg} from './FoodIcons';

const FoodDetails = ({foodDetails, backHandler })=>{
  return(
    <div className='foodDetails'>
      <img src={foodDetails.image} alt='' />
        <div className='food-description'>
          <h1> {foodDetails.name} </h1>
            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: foodDetails.description }}></div>
           <hr />
           <div className='icons-list'>
             <span>{vegNonVeg(foodDetails.nonVeg, foodDetails.spicy)}</span>
             <input type="button" value="Back" style={{ 'backgroundColor':'#B0C4DE', 'fontFamily': ` 'Arvo', serif`}} onClick={backHandler}/>
           </div>
      </div>
    </div>
  );
}

export default FoodDetails;
