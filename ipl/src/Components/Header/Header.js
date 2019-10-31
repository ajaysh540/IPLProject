import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <div className="navbar bg-dark border text-white justify-content-between border-dark">
            <div className="navbar-brand"> <h1>WELCOME</h1></div>
            <div>
                <NavLink className="btn btn-light btn-md m-2" activeClassName="border border-light text-light bg-dark" to="/home">Home</NavLink>
                <NavLink className="btn btn-light btn-md m-2" exact activeClassName="border border-light text-light bg-dark" to="/logout">Logout</NavLink>
               
            </div>


        </div>
    )
}
export default Header;


