import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// const element = (
//     <div>
//         <h1>Hello World!!!</h1>

//         <h2>Vamos Areianara</h2>
//     </div>
// ); 

// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
//   );

// const element = {
//     type: 'h1',
//     props: {
//       className: 'greeting',
//       children: 'Hello, world!'
//     }
//   };



// function welcome(props) { 
//     return <h1>{props.name} was founded in {props.year}</h1>;
// }  

// const obj = {
//     name: "Aris",
//     year: 1914
// };

// const element = welcome(obj);

function Welcome(props) { // It's a function component
    return <h1>Hello, {props.name}</h1>;
  }

//   Components can refer to other components in their output.
//   This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, 
//   all those are commonly expressed as components.
  
function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
