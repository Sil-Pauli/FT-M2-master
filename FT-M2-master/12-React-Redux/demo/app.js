import React from 'react';
import { render } from 'react-dom';
import Counter from './src/components/Counter.jsx';
import Post from './src/components/Post.jsx';
import  { Provider } from 'react-redux'; // envolveoms toda la aplicación en este caso en el componente Provider que viene de la libreria 'react-redux'
import store from './src/store.js'; // el store se crea del creatorStore en archivo store.js

render(
    <Provider store={store}>  {/* componente  Provider que recive el store*/}
      <div>
        <Counter />
        <Post />
      </div>
    </Provider>,
  document.getElementById('app')
);
