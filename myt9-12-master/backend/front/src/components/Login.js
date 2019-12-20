import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from './actions/userActions';
import { Redirect } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name] = e.target.value;
        console.log(state);
        this.setState(state)
    }


    onLoginSuccess(token) {
        console.log(token);
    
        axios.defaults.headers.common.Authorization = 'bearer ' + token;
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        console.log(decoded);
        // if (decoded.rol.name === 'Cliente') {
        //   const user = await axios.get(window.APIS.USUARIO + '/' + decoded._id);
        //   this.setState({ showLogin: false, usuario: user.data });
        // } else {
        //   this.setState({ showLogin: false, usuario: decoded });
        // }
    
      }

    onLogin = async () => {
        await this.props.loginUser(this.state);
        
        console.log("login", this.props.login);
        console.log("login", this.props.login.login.token);
        this.onLoginSuccess(this.props.login.login.token);

    }

    componentWillUnmount(){
        this.setState({ username: "", password: "" })
    }


    signGoogle = () =>{
        window.location.href = "http://localhost:5000/api/auth/google"
    }

    render() {
        let content;
        // console.log(this.props.login);
        if (this.props.login.login.token) {
            content = <Redirect to='/cities'></Redirect>
        } else {
            content = <div className="container">
                <h1>Login</h1>
                <form action="" style={{ display: "flex", flexDirection: "column", }}>
                    <label htmlFor="">
                        Username:
                        <input value={this.state.username} name="username" onChange={this.onChange} type="text" />
                    </label>
                    <label htmlFor="">
                        Password:
                        <input value={this.state.password} name="password" onChange={this.onChange} type="password" />
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="check" id="" />
                        Remember me
                    </label>
                </form>
                <button onClick={this.onLogin}>OK</button>

                <div>
                            <br />
                            O ingresa por tus redes sociales.
                    <br />
                            <div>
                                <button onClick={this.signGoogle}> 
                                {/* <img style={{width: '25px', height: '25px'}} src="../img/64px-Google_G_Logo.svg.png"/>  */}
                                    Google </button>
                                <button onClick={this.signFacebook}> 
                                {/* <img style={{width: '25px', height: '25px'}} src="../img/facebook_64px-F_icon.png"/>  */}
                                     Facebook </button>
                            </div>
                        </div>

            </div>
        }
        return content;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    userActions: (data) => dispatch(userActions(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)