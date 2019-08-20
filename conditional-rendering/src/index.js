import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.js"
import * as serviceWorker from './serviceWorker';


function UserGreeting (){
    return <h1>Hello User. Welcome Back!!!</h1>;
}

function GuestGreeting(){
    return <h1>Please Sign in</h1>
}

function LoginButton(props){
    return <button onClick = {props.onClick}>Login</button>
}

function LogoutButton(props){
    return <button onClick = {props.onClick}>Logout</button>
}

class LoginControl extends React.Component {

    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false, status: "inactive"};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true, status: "active"});
        
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false, status: "inactive"});
        
    }

    render(){

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let greeting;

        if(isLoggedIn){
            button   = <LogoutButton onClick = {this.handleLogoutClick}/>
            greeting = <UserGreeting/>
        }
        else{
            button   = <LoginButton onClick = {this.handleLoginClick}/>
            greeting = <GuestGreeting/>
        }

        return(
            <div>
                {greeting}
                {button}
                <h2>{this.state.status}</h2> 
                               
            </div>
        );
    }

}

ReactDOM.render(<LoginControl />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
