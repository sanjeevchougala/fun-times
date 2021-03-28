import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderComponent extends Component {
    
    render() {
        
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">FunOFunTimes</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/counter">CounterGame</Link></li>
                        <li><Link className="nav-link" to="/tictactoe">Tic-Tac-Toe</Link></li>
                        <li><Link className="nav-link" to="/scrabble">Scrabble</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/dictionary">Dictionary</Link></li>
                    </ul> 
                </nav>
            </header>
        );
    }
}

//export default withRouter(HeaderComponent)