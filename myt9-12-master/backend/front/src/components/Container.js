import React from "react";
import circled from "../img/circled-right-2.png";
import "../components/styles.css";
import { Link } from "react-router-dom";
import {Button,} from "react-bootstrap"


class StarBrowsing extends React.Component {
  render() {
    return (
     
    
      <React.Fragment>
        <h1>
          Find your perfect trip, desinged by insiders <br></br> who know and love their
          cities
        </h1>
        <br></br> <br></br>
        <h2>Start browsing!</h2>
        <Link to= "/Cities"> <img src={circled} className="Circled-logo" alt="circled"></img> </Link> <br></br> <br></br>
        
        </React.Fragment>
        
    );
  }
}

class CreateAccount extends React.Component {
  render(){
    return (
      <React.Fragment>
       
       <Button variant="primary"> <Link to="/CreateAccount">Create Account</Link> </Button> &nbsp;&nbsp;&nbsp;
            
      </React.Fragment>
    )

  }
}

class Login extends React.Component {
  render(){
    return (
      <React.Fragment>
           <button type="button" className="btn btn-primary"> <Link to="/Login">Login</Link></button> 
      </React.Fragment>
    )

  }
}

class Container extends React.Component {
  render(){
    return (
      <div>
        <StarBrowsing/>
        <Login/>
        <CreateAccount/>
      </div>
    );
  }
}

export default Container;
