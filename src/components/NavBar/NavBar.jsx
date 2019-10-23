import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
        <>
            <li className="nav-item">
            <Link to='/ExcercisesList'><span className="nav-link">Excercises List</span></Link>
            </li>
    
            <li className="nav-item">
                <Link to='/Create'><span className="nav-link">Create  </span></Link>
            </li>
     
       
            <li className="nav-item">
                <Link to=''><span className="nav-link" onClick={props.handleLogout}>Log Out</span></Link>
            </li>
        </>
        :
        <>
            <li className="nav-item">
                <Link to='/signup'><span className="nav-link">Sign Up</span></Link>
            </li>
            <li className="nav-item">
                <Link to='/login'><span className="nav-link">Log In</span></Link>
            </li>
        </>;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/'><span className="navbar-brand"> Exercises  </span></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                   
                    {nav}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;