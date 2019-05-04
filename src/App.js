import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Cabecalho from './Componentes/cabecalho';
import Inicio from './Componentes/inicio';
import Servicos from './Componentes/servicos';
import TimeSofia from './Componentes/timeSofia';
import Precos from './Componentes/precos';
import Contato from './Componentes/contato';
import Rodape from './Componentes/rodape';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Cabecalho />
                    
                    <Route path='/' exact component={Inicio} />
                    <Route path='/Servicos' component={Servicos} />
                    <Route path='/TimeSofia' component={TimeSofia} />
                    <Route path='/Precos' component={Precos} />
                    <Route path='/Contato' component={Contato} />
                    
                    <Rodape />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;