import React, { Component } from 'react';

class Rodape extends Component {
    render() {
        return (
            <footer className='container-fluid text-center'>
                <a href='#myPage' title='To Top'>
                    <span className='glyphicon glyphicon-chevron-up'></span>
                </a>
                <p>Site criado pela Equipe Sofia <a href='https://www.sofia.com' title='Visit w3schools'>www.sofia.com</a></p>
            </footer>
        );
    }
}

export default Rodape;