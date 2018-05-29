import React from 'react';


const FoodDetails = ({ foodDetails, backHandler }) =>{
  return(
    <div>
      <img src={foodDetails.image} alt='' width="100%" className="img-responsive" height="500" />
      <h1> {foodDetails.name} </h1>
    </div>
  );
}

export default FoodDetails;
