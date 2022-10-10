import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.cuadrado}>
      <button className={s.btnClose} onClick={props.onClose}> X </button>
      <h3 className={s.name}> {props.name}</h3>
      <img src={ `http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found" />
        <div className={s.minmax}> 
          <div>
            <p>MIN        {props.min}</p>
          </div>
          <div>
            <p>MAX  {props.max}</p>
          </div>
        </div> 
      
    </div>
   )
};