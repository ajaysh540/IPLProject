import React from 'react';
import { Redirect } from 'react-router-dom'
import Main from '../Main/Main'
import Header from '../Header/Header'
function Home() {

   
    if (sessionStorage.getItem("loggedIn")) {
        return (
            <div className="container-fluid">
                <Header />
                <Main />
            </div>

        );
    }
    else {
        return <Redirect to="/" />
    }
}
export default Home;