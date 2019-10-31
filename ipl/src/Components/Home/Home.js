import React from 'react';
import { Redirect } from 'react-router-dom'
import Main from '../Main/Main'
import Header from '../Header/Header'
function Home() {

   
    // const user = JSON.parse(sessionStorage.getItem("User"));
    if (sessionStorage.getItem("loggedIn")) {
        return (
            <div>
                <Header />
                    <Main/>
            </div>

        );
    }
    else {
        return <Redirect to="/" />
    }
}
export default Home;