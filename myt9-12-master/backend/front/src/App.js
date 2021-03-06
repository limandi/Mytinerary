import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Cities from "./components/Cities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount"




function App() {
    return ( <div className = "App" >


        < Header > </Header> 
        <Router >
           <Switch>
               <Route exact path = "/" component = { Home }/> 
               <Route path = "/Cities" component = { Cities }/>
               <Route path = "/CreateAccount" component = { CreateAccount }/>

           </Switch> 
       
        <Footer> </Footer>
        </Router> 


      
        </div>
    );
}


export default App;