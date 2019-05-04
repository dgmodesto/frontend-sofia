import React, { Component } from 'react';

class MyButton extends Component{
    render(){
        return (
            <div>
                <button className="btn btn-primary">{this.props.nome}</button>
            </div>
        );
    }
}

class MyLabel extends Component{
    render(){
        return(
            <div>
                <p> {this.props.texto}</p>
            </div>
        );
    }
}

class TestProps extends Component{
    render(){
        return(
            <div className="TestProps">
                <MyLabel texto=" Douglas Modesto" />
                <MyButton nome="Botão 1"/>
                <MyButton nome="Botão 2"/>
                <MyButton nome="Botão 3"/>
            </div>
        );
    }
}

export default TestProps;