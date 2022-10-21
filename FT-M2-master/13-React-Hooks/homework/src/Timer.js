import React, {useState, useEffect, useRef} from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  //dentro del componente fuera del return
  //se generan 3 estados 
  //para acceder dentro del componente, lo hacemos desde la primera variante
  // para modificar usamos la segunda funcion
  // despues del = se declara los valores iniciales

  const myRef = useRef(null);

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos <= 0&& tipo === 'Cuenta Regresiva') {
      reset();
      myRef.current.value= 0;
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);


  function toggle() {
    setActivo(!activo); 
    // una función toggle que al valor que tenia en setActivo lo invierta
  };

  function reset() {
    setSegundos(0);
    setActivo(false);
  };

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva');
    if(tipo === 'Cuenta Regresiva') setTipo('Contador');
};

function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
};

  return (
    <div className="app">
    <div className="time">
      {segundos}s
    </div>
    <div className="row">
      <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}
      onClick ={toggle}
      >
        {activo ? 'Pausa' : 'Inicio'}
      </button>
      <button className="button- secondary "
      onClick={reset}>
        Reset
      </button>
    </div>
    <button className="button"
     onClick={cambioTipo}
     >
        {tipo}
    </button>
    {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
  </div>
);
};

export default Timer;