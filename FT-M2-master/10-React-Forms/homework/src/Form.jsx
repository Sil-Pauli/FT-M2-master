import React from 'react';

export function validate(input) { //nos da una fucion validate que recive un imput
  let errors = {}; //tiene un objeto errors y pregunta
  if (!input.username) { // si no me pasan username, voy a agregar una propiedad en el objeto que diga 'Username is required'
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) { // si no tenemos que validar la expresion  !/\S+@\S+\.\S+/
    errors.username = 'Username is invalid'; // si la validacion no se cumple, no esta mal, pero te retorna 'Username is invalid'
  }

  //hacemos lo mismo con password
  if (!input.password){
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) { //esta expresion se utiliza para pedir que tenga un numero la contraseña
    errors.password= 'Password is invalid';
  }
  return errors;
};
 
export default function Form() {
  //const [username, setUsername] = React.useState('');
  //const [password, setPassword] = React.useState('');
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setError] = React.useState({});

  const handleInputChange = function(e) {
   setError ( validate ({
      ...input,
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  
  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          className={errors.username && 'danger'} // si tenemos un error agregale la clase danger (lo pinta de otro color)
          value={input.username} 
          onChange={handleInputChange}/>
          {
          errors.username && (
          <p className="danger">{errors.username}</p>
          )}
      </div>
      <div> 
        <label>Password:</label>
        <input 
        type="password" 
        password="password" 
        className={errors.password && 'danger'}
        value={input.password} 
        onChange={handleInputChange}/>
        {
        errors.password && (
        <p className="danger">{errors.p}</p>
        )}
      </div>
      <input type= 'sibmit' value ='Submit'  />
     </form>
  );
};