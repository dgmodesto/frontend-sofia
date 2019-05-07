import React, { Component } from 'react'

class Inicio extends Component {
    render() {
        const embededPersonalizado= {
            paddingBottom: '40%'
        };
        const tamanhoImg = {
            width: '10%',
            height: '10%',
        }
        return (
            <div>
                {/*<!-- 21:9 aspect ratio -->*/}
                <br/>

                <p className="titulo">SOBRE A SOFIA</p><br />
                <p> Veja o Vídeo para entender o que a <strong>SOFIA </strong>irá fazer.</p>
                <br/>

                <div className="embed-responsive embed-responsive-16by9" style={embededPersonalizado}>
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ZBs5dCIyPBs" ></iframe>
                </div>

                {/* Container (About Section) {*/}
                <div id='about' className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-8'>

                            <h2>Sobre o Projeto</h2><br />
                            <h4>A <strong>SOFIA</strong> foi criada em uma era em que um dos maiores problemas de saúde pública é o suicídio. </h4><br />
                            <p>Acreditamos que o suicídio possa ser evitado com a nova tecnologia SOFIA, o elo entre usuários de redes sociais com profissionais da saúde, clínicas e centros especializados, incentivando internautas com tendências suicidas a buscar ajuda e a superar os obstáculos e tabus, esses tão comumente reprimidos em uma sociedade cada vez menos autruísta.</p>
                            <br />
                            <button className='btn btn-default btn-lg'>Saiba mais</button>
                        </div>
                        <div className='col-sm-3'>
                            <span className='glyphicon glyphicon-signal logo' sytle={tamanhoImg}></span>
                        </div>
                    </div>
                </div>

                <div className='container-fluid bg-grey'>
                    <div className='row'>
                        <div className='col-sm-3'  sytle={tamanhoImg}>
                            <span className='glyphicon glyphicon-globe logo '></span>
                        </div>
                        <div className='col-sm-8'>
                            <h2>Nossos Valores</h2><br />
                            <h4><strong>MISSÃO:</strong> Prevenir o suicidio identificando padrões e criando vínculos de comunicação entre usuários de mídias sociais com profissionais especializados, que ofereçam estímulos a sua melhora, apoio ao momento e tratamento em potencial.<br /><br />
                                <strong>VISÃO:</strong> Não deixar o suicídio ser uma opção. Sermos lembrados por incentivar as pessoas a procurar ajuda de um profissional ou serviço de saúde.</h4>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Inicio;