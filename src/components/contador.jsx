import React, { Component } from 'react';

class Contador extends Component{
    state = {  
                contador: 0,
                itens : []
            };

    estilos = {
        fontSize: 40,
        fontWeight: "normal"
    };


    render(){

        return (
            <React.Fragment>
                <div>
                    <span style={this.estilos} className={this.getBadgeClasses()}>{this.formatarContador()}</span>
                    <button onClick={this.tratarIncremento} className="btn btn-secondary">Incrementar</button>
                    {this.state.itens.length === 0 && 'Inclua itens ...'}
                    {this.renderItens()}
                </div>
            </React.Fragment>
        );
    }

    renderItens(){
        if(this.state.itens.length === 0) return <p> Não há itens</p>

        return  <ul>
                    {this.state.itens.map(item => <li key={item}>{item}</li>)}
                 </ul>
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.contador > 10 ? "success" : "primary");
        return classes;
    }

    formatarContador(){
        const {contador} = this.state;
        return contador === 0 ? "Zero" : contador;
    }

    tratarIncremento = () => {
        this.setState({contador: this.state.contador + 1});
    };
}

export default Contador;