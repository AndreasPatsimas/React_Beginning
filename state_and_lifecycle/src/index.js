import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// function Clock(props){ // remember function component with a capital letter
     
//     return  <div>
//                 <h1>Hello World!!!</h1>
//                 <h2>It is {props.date.toLocaleTimeString()}</h2>
//             </div>;
// }

// class Clock extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){ // The componentDidMount() method runs after the component output has been rendered to the DOM.
        this.timerID = setInterval(() =>{
            this.tikTok()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }


    tikTok(){
        this.setState({
            date: new Date()
        });
    }
    
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


//const hello = <Clock date = {new Date()} />

// const tikTok = () => {
//     ReactDOM.render(<Clock date = {new Date()} />, document.getElementById('root'));
// }


function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }

ReactDOM.render(<App/>, document.getElementById('root'));


//setInterval(tikTok, 1000);

// that 's nice and i love it actually


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
