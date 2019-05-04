import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Cabecalho extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <Link className="navbar-brand" to="/">
                           logo  
                        </Link> */}
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to='/' >INICIO </Link></li>
                                <li><Link to='/servicos' >SERVIÇOS</Link></li>
                                <li><Link to='/precos' >PREÇOS</Link></li>
                                <li><Link to='/timeSofia' >TIME</Link></li>
                                <li><Link to='/contato' >CONTATO</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='jumbotron text-center'>
                    <img className='logo' src='./logo_sofia.jpeg' alt='Sofia' width='25%' height='25%' />
                    <p className="titulo">Você não está sozinho</p>

                </div>
            </div>

        );
    }
}

export default Cabecalho;