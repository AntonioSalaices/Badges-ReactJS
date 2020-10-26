// const element = document.createElement("h1");
// element.innerHTML = "Hola, Antonio Salaices Monzón";
// const container = document.getElementById('app');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import App from './components/App';

import Badges from './pages/Badges';
import "bootstrap/dist/css/bootstrap.css"
import "./global.css"
const container = document.getElementById('app');

ReactDOM.render(<App />,container);
// const element = React.createElement(
//     'div',
//      {},
//      React.createElement('h1',{},'Hola, soy Antonio'),
//      React.createElement('p',{},'Hola, soy ingeniero fullstack')

// );

// const name = "Antonio";
// const sum = ()=> 2+5;
// const element = React.createElement('h1',{}, `Hola, soy ${ sum() }.`);
// const element = React.createElement('a',{href:'https://platzi.com'},'Ir a Platzi.');


