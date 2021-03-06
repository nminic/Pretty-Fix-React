import React from 'react';
import './style.css';

/**
* @author
* @function Card
**/

//High level, reusable komponenta
//{props.children} - prikaz onoga što prosleđujemo pod <Card></Card> u Hero

const Card = (props) => {
  return(
    <div className="card" style={{ width: props.width ? props.width: '100%' }} {...props}>
        {props.children} 
    </div>
   )

 }

export default Card