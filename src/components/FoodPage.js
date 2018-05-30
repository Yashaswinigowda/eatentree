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
          this.setState({
            isLoading: true,
            error
          });
        }
      )
  }

  selectedFood(val){
    let selectedFood = this.state.foods[val];
    this.setState({isSelected:true, selectedFood:selectedFood});
  }

  backHandler(){
    this.setState({isSelected:false});
  }

  render(){
      const { error, isLoading, foods, selectedFood } = this.state;

      if (error) {
        return <h2> Error: {error.message} </h2>;
      }

      else if (!isLoading) {
        return <h2> Loading...</h2>;
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

// return <div style={{'width':'200px', 'height':'300px', 'border':'1px solid', 'box-shadow':'5px 5px #888888'}}> Error: {error.message} </div>;

export default FoodPage;
