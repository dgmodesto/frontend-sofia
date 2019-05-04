import React, { Component } from 'react'

class Servicos extends Component {
    render() {
        return (
            <div>
                {/* Container (Services Section) */}
                <div id='services' className='container-fluid text-center'>
                    <h2>SERVIÇOS</h2>
                    <h4>O que oferecemos</h4>
                    <br />
                    <div className='row'>
                        <div className='col-sm-6'>
                            <span className='glyphicon glyphicon-user logo-small'></span>
                            <h4>PARCERIA SIMPLES</h4>
                            <div className="col-sm-12">
                                <div className="color-palette-set">
                                    <div className="bg-purple disabled color-palette"><span>Indicação</span></div>
                                    <div className="bg-purple color-palette"><span>Considera Região</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <span className='glyphicon glyphicon-heart logo-small'></span>
                            <h4>PARCERIA ESPECIAL</h4>
                            <div className="col-sm-12">
                                <div className="color-palette-set">
                                    <div className="bg-purple disabled color-palette"><span>Indicação</span></div>
                                    <div className="bg-purple color-palette"><span>Considera Região</span></div>
                                    <div className="bg-purple-active color-palette"><span>Sobe no Ranking de Recomendação</span></div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <br /><br />
                    <div className='row '>
                        <div className='col-sm-6'>
                            <span className='glyphicon glyphicon-star-empty logo-small'></span>
                            <h4>PUBLICIDADE NORMAL</h4>
                            <div className="col-sm-12">
                                <div className="color-palette-set">
                                    <div className="bg-purple disabled color-palette"><span>Divulgação em Rede Sociais</span></div>
                                    <div className="bg-purple color-palette"><span>Divulgação no nosso Site</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <span className='glyphicon glyphicon-certificate logo-small'></span>
                            <h4>PUBLICIDADE EXTRA</h4>
                            <div className="col-sm-12">
                                <div className="color-palette-set">
                                    <div className="bg-purple disabled color-palette"><span>Divulgação em Rede Sociais</span></div>
                                    <div className="bg-purple color-palette"><span>Sobe no Ranking para destaques</span></div>
                                    <div className="bg-purple-active color-palette"><span>Mais vezes divulgado</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Servicos;