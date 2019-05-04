import React, { Component } from 'react';
import ReactDom from 'react-dom'

class ExibirAviso extends Component{

    constructor(props){
        super(props);   
        this.state = {
            nome : ""
        }
    }

    changeText(event){
        this.setState({
            nome: event.target.value
        });
    }


    handleEvent = event =>  {
        alert('botão clicado...');
    }

    render(){
        return (

            <div>
                <button onClick={this.handleEvent} >Exibir Aviso</button>


                <label htmlFor="nome">Informe seu nome</label>
                <input type="text" id="nome" onChange={this.changeText.bind(this)}></input>
                <h3>{this.state.nome}</h3>
            </div>
        )
    }

    exibirAviso(){
        alert('Sou um aviso ...');
    }
}

export default ExibirAviso;