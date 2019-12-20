import React, { Component } from "react";
import {
  
    FormGroup,
    Label,
    Input,

  } from "reactstrap";
  
  import axios from "axios"; 
  

 
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "",
          email: "",
          password:"",
          profilePic: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
  
    }

  
    handleChange(event) {
        
const target = event.target;
console.log(this.state)
const value =
target.type === "text" || "password" ? target.value : target.value;
const name = target.name;

      this.setState( {[name]: value });

      
    }

   handleSubmit = async e => {
        e.preventDefault();

        const respuesta = await axios.post("localhost:4000/usuarios", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            profilePic: this.state.profilePic,

        });

    }
     

  
  
    render() {
      return (
        <form name = "Formulario">

            <FormGroup className=" mr-2 w-100">
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup className="w-100">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup className=" mr-2 w-100">
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Profile Picture</Label>
              <Input
                type="url"
                name="profilePic"
                onChange={this.handleChange}
              />
            </FormGroup> 
            <button onClick={this.handleSubmit}> </button>
           
           
      </form>
      );
       }
  }



  export default Form; 