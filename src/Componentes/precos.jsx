import React, { Component } from 'react';

class Precos extends Component {


    render() {
        const salesChart = {
            height: 180,
            width: 699
        };

        const progressBar = {
            width: '80%'
        }

        return (
            
            <div>
                {/* <div classNameName='row '>
                        <img  src='./servico_sofia.png' alt='Sofia' width='100%' height='30%' />  
                    </div> */}
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Monetização</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                    </button>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-wrench"></i></button>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Parceria Simples</a></li>
                                            <li><a href="#">Parceria Especial</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li className="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                            {/*<!-- /.box-header --> */}
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="text-center">
                                            <strong>Vendas: 1 Jan, 2019 - 30 Jul, 2019</strong>
                                        </p>

                                        <div className="chart">
                                            {/*<!-- Sales Chart Canvas --> */}
                                            <canvas id="salesChart" style={salesChart}></canvas>
                                        </div>
                                        {/*<!-- /.chart-responsive --> */}
                                    </div>
                                    {/*<!-- /.col --> */}
                                    <div className="col-md-4">
                                        <p className="text-center">
                                            <strong>Vendas x Objetivo</strong>
                                        </p>

                                        <div className="progress-group">
                                            <span className="progress-text">Parceria Simples</span>
                                            <span className="progress-number"><b>160</b>/200</span>

                                            <div className="progress sm">
                                                <div className="progress-bar progress-bar-aqua" style={progressBar}></div>
                                            </div>
                                        </div>
                                        {/*<!-- /.progress-group --> */}
                                        <div className="progress-group">
                                            <span className="progress-text">Parceria Especial</span>
                                            <span className="progress-number"><b>310</b>/400</span>

                                            <div className="progress sm">
                                                <div className="progress-bar progress-bar-red" style={progressBar}></div>
                                            </div>
                                        </div>
                                        {/*<!-- /.progress-group --> */}
                                        <div className="progress-group">
                                            <span className="progress-text">Publicidade Normal</span>
                                            <span className="progress-number"><b>480</b>/800</span>

                                            <div className="progress sm">
                                                <div className="progress-bar progress-bar-green" style={progressBar}></div>
                                            </div>
                                        </div>
                                        {/*<!-- /.progress-group --> */}
                                        <div className="progress-group">
                                            <span className="progress-text">Publicidade Extra</span>
                                            <span className="progress-number"><b>250</b>/500</span>

                                            <div className="progress sm">
                                                <div className="progress-bar progress-bar-yellow" style={progressBar}></div>
                                            </div>
                                        </div>
                                        {/*<!-- /.progress-group --> */}
                                    </div>
                                    {/*<!-- /.col --> */}
                                </div>
                                {/*<!-- /.row --> */}
                            </div>

                            {/*<!-- VALORES E PERCENTUAIS --> */}
                            <div className="box-footer">
                                <div className="row">
                                    <div className="col-sm-3 col-xs-6">
                                        <div className="description-block border-right">
                                            <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 15%</span>
                                            <h5 className="description-header">R$200,00/Mês</h5> ou
                                            <h5 className="description-header">R$2.040,00/Ano</h5>
                                            <span className="description-text">PARCERIA SIMPLES</span>
                                        </div>
                                        {/*<!-- /.description-block --> */}
                                    </div>
                                    {/*<!-- /.col --> */}
                                    <div className="col-sm-3 col-xs-6">
                                        <div className="description-block border-right">
                                            <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 30%</span>
                                            <h5 className="description-header">R$300,00/Mês</h5> ou
                                            <h5 className="description-header">R$2.520,00/Ano</h5>
                                            <span className="description-text">PARCERIA ESPECIAL</span>
                                        </div>
                                        {/*<!-- /.description-block --> */}
                                    </div>
                                    {/*<!-- /.col --> */}
                                    <div className="col-sm-3 col-xs-6">
                                        <div className="description-block border-right">
                                            <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                                            <h5 className="description-header">R$100,00/Mês</h5> ou
                                            <h5 className="description-header">R$960,00/Ano</h5>
                                            <span className="description-text">PUBLICIDADE NORMAL</span>
                                        </div>
                                        {/*<!-- /.description-block --> */}
                                    </div>
                                    {/*<!-- /.col --> */}
                                    <div className="col-sm-3 col-xs-6">
                                        <div className="description-block">
                                            <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 28%</span>
                                            <h5 className="description-header">R$150,00/Mês</h5> ou
                                            <h5 className="description-header">R$1.296,00/Ano</h5>
                                            <span className="description-text">PUBILICIDADE EXTRA</span>
                                        </div>
                                        {/*<!-- /.description-block --> */}
                                    </div>
                                </div>
                                {/*<!-- /.row --> */}
                            </div>
                            {/*<!-- /VALORES E PERCENTUAIS --> */}
                        </div>
                        {/*<!-- /.box --> */}
                    </div>
            </div>
        );
    }
}
export default Precos;