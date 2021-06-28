import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">WELCOME</a>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Rooms</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/create-room">Create Rooms</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/create-category">Create Categories</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
        )
    }
}

export default NavBar;