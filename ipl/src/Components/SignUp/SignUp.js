import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        sessionStorage.removeItem("loggedIn");
        sessionStorage.removeItem("User");
        this.state = {
            username: '',
            password: '',
            repeatPass: '',
            loggedIn: false,
            invalid: false,
            error:''
        }

    }


    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleRepeatPass = (e) => {
        this.setState({ repeatPass: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.repeatPass) {
            Axios.post('/register', {
                username: this.state.username,
                password: this.state.password,
                type: "user"
            }).then(res=>alert(res.data),
            err=>{this.setState({invalid:true})
            console.log(err.response.data)
               this.setState({error:err.response.data});
        });
           return <Redirect to="/"/>
        }
        else {
            this.setState({ error: "ENTER SAME PASSWORDS!!!" });
        }
    }

    render() {

        if (!this.state.loggedIn)
            return (
                <div className="row text-center">
                    <header className="bg-secondary text-white col-12"><h1>Welcome</h1></header>
                    <div className="col-8 mt-5 offset-2 border border-dark">
                        <div className="container bg-light text-secondary h3" >Sign Up Here</div>
                        <div className="container mt-2">
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    id="username"
                                    label="Username"
                                    className="w-50 m-3"
                                    value={this.state.username}
                                    onChange={this.handleUsername}
                                    margin="normal"
                                    variant="filled"
                                    required
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className="w-50 m-3"
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.handlePassword}
                                    margin="normal"
                                    variant="filled"
                                    required
                                /><br />
                                <TextField
                                    id="rpassword"
                                    label="Repeat Password"
                                    className="w-50 m-3"
                                    value={this.state.repeatPass}
                                    type="password"
                                    onChange={this.handleRepeatPass}
                                    margin="normal"
                                    variant="filled"
                                    required
                                /><br />
                               <div className="text-danger h5 text-center"> {this.state.error}</div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="m-2"
                                    type="submit"
                                >
                                    <h4>SignUp</h4>
                                </Button>
                            </form>
                        </div>
                        <NavLink className="btn" to="/">
                            <h5>Already have an account?</h5>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="m-2"
                                type="submit"
                            >
                                <h4>LogIn</h4>
                            </Button>
                        </NavLink>
                    </div>
                </div>
            )
        else return (<Redirect to="/home"></Redirect>)
    }
}
export default Login;