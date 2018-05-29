import React from 'react';

import FoodList from './FoodList';
import FoodDetails from './FoodDetails';

import '../App.css';

class FoodPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      foods: [],
      selectedFood: {}
    };
    this.selectedFood = this.selectedFood.bind(this);
    this.backHandler = this.backHandler.bind(this);
  }

  componentDidMount(){
      fetch("http://texpertise.in/data.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            foods: result,
            isSelected: false,
          });
        },

        (error) => {
          isLoading: true,
          error
        }
      )
  }

  selectedFood(val){
    console.log(val);
    let selectedFood = this.state.foods[val];
    this.setState({isSelected:true, selectedFood:selectedFood});
  }

  backHandler(){
    console.log('back');
    this.setState({isSelected:false});
  }

  render(){
      const { error, isLoading, foods, selectedFood } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      else if (!isLoading) {
        return <div>Loading...</div>;
      }
      else if(!this.state.isSelected){
        return(
          foods.map((food, key) => {
            return(
            <div className = 'grid-container'>
                <FoodList
                  foods = {food}
                  key = {key}
                  indexValue = {key}
                  selectedFood = {this.selectedFood}
                />
            </div>
            )
          })
        );
      }
      else{
        return(
          <FoodDetails
            backHandler={this.backHandler}
            foodDetails={selectedFood}
            />
        )
      }
  }
}


export default FoodPage;
