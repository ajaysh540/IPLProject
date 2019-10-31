import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';


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
    user = {
        name: 'Admin',
        type: 'Admin',
        fav: 'CSK'
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
        if (username === "admin" && password === "admin") {
            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("User", JSON.stringify(this.user));
            console.log(username, password);
            this.setState({ loggedIn: true })
        }
        else { this.setState({ invalid: true }) }
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
                    <header className="bg-secondary text-white col-12"><h1>Welcome</h1></header>
                    <div className="col-8 mt-5 offset-2 border border-dark">
                        <div className="container bg-light text-secondary h3" >Please Login Here</div>
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
                        </div>
                    </div>
                </div>
            )
        else return (<Redirect to="/home"></Redirect>)
    }
}
export default Login;