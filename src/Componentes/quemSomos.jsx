import React, { Component } from 'react'

class TimeSofia extends Component {
    render() {
        const tamanhoFoto = {
            width: '100px',
            height: '100px',
            float: 'left'
        }
        return (
            <div>
                <div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header p-2">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a className="nav-link active show" href="#activity" data-toggle="tab"><h2>Time Sofia</h2><br /></a></li>
                        </ul>
                    </div>
                    {/* {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="activity">
                                {/* <!-- Post --> */}
                                <div className="post">
                                    <div className="user-block col-md-12">
                                        <img className="img-circle img-bordered-sm" style={tamanhoFoto} src="../content/dist/img/perfilDouglas.jpg" alt="user image" />
                                        <span className="username">
                                            <a href="#">Douglas Gomes Modesto.</a>
                                        </span>
                                        <a href="https://www.linkedin.com/in/douglas-modesto-mta-mba-062b4b9b" target="_blank">
                                            <img className="img-circle img-bordered-sm" src="../content/dist/img/linkedin.png" alt="user image" />
                                        </a>
                                        <span className="description">Senior FullStack Developer .Net at TCS | Intelligence Artificial | Machine Learning</span>
                                    </div>
                                    {/* <!-- /.user-block --> */}
                                    <p>
                                        Analista e Desenvolvedor .Net Sênior, Tech Lead de Desenvolvimento e pós-graduado em <strong>Inteligência Artificial e Machine Learning</strong>.
                                        <br />
                                        Uma sede de conhecimento ímpar, sempre buscando novas tecnologias que possam proporcionar maior escalabilidade e processamento trazendo valor para o négocio.
                                  </p>
                                </div>
                                {/* <!-- /.post --> */}

                                {/* <!-- Post --> */}
                                <div className="post clearfix">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm"  style={tamanhoFoto} src="../content/dist/img/perfilAllan.jpg" alt="User Image" />
                                        <span className="username">
                                            <a href="#">Allan Gregory Gilabel</a>
                                        </span>
                                        <a href="https://www.linkedin.com/in/allan-gregory-gilabel-379a708b" target="_blank">
                                            <img className="img-circle img-bordered-sm" src="../content/dist/img/linkedin.png" alt="user image" />
                                        </a>
                                        <span className="description">Analista de Desenvolvimento de Sistemas Pleno na MFMti</span>
                                    </div>
                                    {/* <!-- /.user-block --> */}
                                    <p>
                                    Gosto de estudar o tempo todo e aprendo todo dia algo novo. Gosto de ajudar as pessoas e compartilhar o conhecimento.
                                    <br />
                                    Sempre dou o melhor de mim em tudo que faço e não tenho medo em arriscar. Sempre vejo o lado positivo para tudo e sou apaixonado em aproveitar todos os momentos da vida como se fossem únicos.
                                     </p>


                                </div>
                                {/* <!-- /.post --> */}

                                {/* <!-- Post --> */}
                                <div className="post clearfix">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm" style={tamanhoFoto} src="../content/dist/img/perfilLiliane.jpg" alt="User Image" />
                                        <span className="username">
                                            <a href="#">Liliane Veira Scandoleiro</a>
                                        </span>
                                        <a href="https://www.linkedin.com/in/liliane-veira-scandoleiro-81467364" target="_blank">
                                            <img className="img-circle img-bordered-sm" src="../content/dist/img/linkedin.png" alt="user image" />
                                        </a>
                                        <span className="description">Advanced Analytics Consultant na EY</span>
                                    </div>
                                    {/* <!-- /.user-block --> */}
                                    <p>
                                        Entusiasta em <strong>machine learning e inteligência artificial</strong> que atua como consultora de advanced analytics.<br />
                                        Sempre em busca por novos desafios e aprendizado constante.
                                  </p>


                                </div>
                                {/* <!-- /.post --> */}


                                {/* <!-- Post --> */}
                                <div className="post clearfix">
                                    <div className="user-block">
                                        <img className="img-circle img-bordered-sm" style={tamanhoFoto} src="../content/dist/img/perfilJonas.jpg" alt="User Image" />
                                        <span className="username">
                                            <a href="#">Jonas Prado</a>
                                        </span>
                                        <a href="https://www.linkedin.com/in/jonaspprado" target="_blank">
                                            <img className="img-circle img-bordered-sm" src="../content/dist/img/linkedin.png" alt="user image" />
                                        </a>
                                        <span className="description">Anl Business Intelligence at Santander | MBA Artificial Intelligence e Machine Learning</span>
                                    </div>
                                    {/* <!-- /.user-block --> */}
                                    <p>
                                    Atualmente analista na área de Inteligência Comerical do Santander Brasil.<br />
                                    Pós-graduado em Inteligência Artificial e Machine Learning na FIAP. 
                                    Foi voluntário durante um ano na ONG Amigos do Bem.
                                     </p>


                                </div>
                                {/* <!-- /.post --> */}

                            </div>


                        </div>
                        {/* <!-- /.tab-content --> */}
                    </div>{/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.nav-tabs-custom --> */}
            </div>





        </div>

            </div>
        );
    }
}

export default TimeSofia;