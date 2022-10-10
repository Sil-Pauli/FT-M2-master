import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={s.container}>
    {
      props.cities.map(c => 
        <Card
          key={c.id}
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img = {c.weather[0].icon}
          onClose= {()=>alert(c.name)}
          />
      )
    }
  </div>
  )
};