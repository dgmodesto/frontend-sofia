import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Cabecalho from './Componentes/cabecalho';
import Inicio from './Componentes/inicio';
import Servicos from './Componentes/servicos';
import QuemSomos from './Componentes/quemSomos';
import Planos from './Componentes/planos';
import Contato from './Componentes/contato';
import Rodape from './Componentes/rodape';
import Site from './Site';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Cabecalho />
                    
                    <Route path='/' exact component={Inicio} />
                    <Route path='/Servicos' component={Servicos} />
                    <Route path='/QuemSomos' component={QuemSomos} />
                    <Route path='/Planos' component={Planos} />
                    <Route path='/Contato' component={Contato} />
                    
                    <Rodape />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

