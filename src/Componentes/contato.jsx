import React, { Component } from 'react';

import api from '../servicos/api'

class Contato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assunto: "",
            email: "",
            mensagem: ""
        };

        this.onChange = (evento) => {

            //isso é feito pára não alterar o objeto state diretamento e com isso evitar mutações.
            const state = Object.assign({}, this.state);
            const campo = evento.target.name;
            console.log(state);

            state[campo] = evento.target.value;
            this.setState(state);

        };

        this.onSubmit = async (evento) => {
            evento.preventDefault();

            if (this.state.assunto === '' || this.state.email === '' || this.state.mensagem === '') {
                alert("Por favor, preencha todos os campos");
            }

            var objPostJson = {
                Destino: this.state.email,
                Assunto: this.state.assunto,
                Mensagem: this.state.mensagem
            }

            //console.log(JSON.stringify(objPostJson));

            const response = await api.post('api/email/', objPostJson)
                .then(resp => {
                    alert(resp.data);
                 })
                .catch(error => {
                    console.log(error)
            });

        };
    }

    render() {
        return (
            <div>
                {/*Container (Contact Section) */}
                <div id='contact' className='container-fluid bg-grey'>
                    <h2 className='text-center'>CONTATO</h2>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <p>Contate-nos e retornaremos dentro de 24 horas</p>
                            <p><span className='glyphicon glyphicon-map-marker'></span> São Paulo, SP</p>
                            <p><span className='glyphicon glyphicon-phone'></span> +00 1515151515</p>
                            <p><span className='glyphicon glyphicon-envelope'></span> sofiabot@gmail.com</p>
                        </div>
                        <div className='col-sm-7 '>
                            <div className='row'>
                                <div className='col-sm-6 form-group'>
                                    <input className='form-control' id='assunto' name='assunto' value={this.state.assunto} onChange={this.onChange} placeholder='assunto' type='text' required />
                                </div>
                                <div className='col-sm-6 form-group'>
                                    <input className='form-control' id='email' name='email' value={this.state.email} onChange={this.onChange} placeholder='Email' type='email' required />
                                </div>
                            </div>
                            <textarea className='form-control' id='mensagem' name='mensagem' value={this.state.mensagem} onChange={this.onChange} placeholder='digite aqui ...' rows='5'></textarea><br />
                            <div className='row'>
                                <div className='col-sm-12 form-group'>
                                    <button className='btn btn-primary pull-right' name='enviar' onClick={this.onSubmit} type='submit'>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contato;