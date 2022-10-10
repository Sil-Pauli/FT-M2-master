import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div className={s.cuadrado}>
    <input type='text'/>
    <button className={s.btnClose} onClick={() => onSearch('Agregando ciudad..')}>Agregar</button>
  </div>
  )
};