import React from 'react';
import '../App.css';

const Header = (props) => {
  return(
    <div>
        <Example />
        {props.children}
    </div>
  );
}


export default Header;


const Example = () =>{
  return(
    <div className='header'>
      Food Eating Website
    </div>
  );
}
