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
            loggedIn: false,
            invalid: false,
        }
    }
    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.checkLogin(this.state.username, this.state.password);
    }
    checkLogin(username, password) {
        if (username === "" || password === "") {
            this.setState({ invalid: true })
        }
        else {
            Axios.post('/signin', {
                username: this.state.username,
                password: this.state.password
            }

            ).then(res => {
                const user = res.data;
                sessionStorage.setItem("loggedIn", true);
                // console.log(user)
                sessionStorage.setItem("uname", user.username);
                sessionStorage.setItem("utype", user.type);
                this.setState({ loggedIn: true })
            }, err => {
                // console.log(err)
                this.setState({ invalid: true });
            });
        }
    }
    invalidEntry() {
        if (this.state.invalid)
            return (<p className="text-danger h6">Invalid Credentials! Please try again.</p>);
        else return;
    }
    render() {

        if (!this.state.loggedIn)
            return (
                <div className="row text-center">
                    <div className="bg-secondary navbar text-white col-10 offset-1">
                        <div className="text-left navbar-brand h1">Primier League</div>
                    </div>

                    <div className="col-8 mt-5 offset-2 border border-dark">
                        <div className="container bg-light text-secondary h3" >Please Login Here</div>
                        <div className="container mt-2">
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    required
                                    id="username"
                                    label="Username"
                                    className="w-50 m-3"
                                    value={this.state.username}
                                    onChange={this.handleUsername}
                                    margin="normal"
                                    variant="filled"
                                />
                                <TextField
                                    required
                                    id="password"
                                    label="Password"
                                    className="w-50 m-3"
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.handlePassword}
                                    margin="normal"
                                    variant="filled"
                                /><br />

                                {this.invalidEntry()}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="m-2"
                                    type="submit"
                                >
                                    <h4>Login</h4>
                                </Button>
                            </form>
                            <br />
                            <h4>New here? Join Us!!</h4>
                            <NavLink className="btn" to="/signup">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="m-2"
                                    type="submit"
                                >
                                    <h4>Sign Up
                                        </h4>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        else return (<Redirect to="/home"></Redirect>)
    }
}
export default Login;