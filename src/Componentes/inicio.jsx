import React, { Component } from 'react'

class Inicio extends Component {
    render() {
        return (
            <div>
          
                {/* Container (About Section) {*/}
                <div id='about' className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-8'>
                            
                            <h2>Sobre o Projeto</h2><br />
                            <h4>A <strong>SOFIA</strong> foi criada em uma era em que um dos maiores problemas de saúde pública é o suicídio. </h4><br />
                            <p>Acreditamos que podemos salvar vidas e que nosso sistema SOFIA possa ser o elo entre usuários de redes sociais que enfrentam a depressão e tendem ao suicídio, com profissionais, clínicas e centros especializados no tema.</p>
                            <br />
                            <button className='btn btn-default btn-lg'>Saiba mais</button>
                        </div>
                        <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-signal logo'></span>
                        </div>
                    </div>
                </div>

                <div className='container-fluid bg-grey'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <span className='glyphicon glyphicon-globe logo '></span>
                        </div>
                        <div className='col-sm-8'>
                            <h2>Nossos Valores</h2><br />
                            <h4><strong>MISSIÃO:</strong> Prevenir o suicídio. Criando meios de ajuda às pessoas, conectando-as a profissionais especializados.<br /><br />
                            <strong>VISIÃO:</strong> Não deixar o suicídio ser uma opção. Sermos lembrados por incentivar as pessoas a procurar ajuda de um profissional ou serviço de saúde.</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;