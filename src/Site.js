import React from 'react';

const Site = props => {

    return (
        <div>
            <ul className="liPlanosContainer">
                <li className="liPlanosBranco" data-popular="RECOMENDADO">
                    <div className="liPlanosDesc">
                        <h3 className="liPlanosTitle">PARCERIA SIMPLES</h3>
                        <p className="liPlanosHeading2 liPlanosPreco">R$200,00</p>/Mês
                        <p className="liPlanosHeading2 liPlanosPreco">R$2.040,00</p>/Ano
                        <br />
                        <br />
                        <ul className="liPlanosItem">
                            <li className="liPlanosItem">Indicação</li>
                            <li className="liPlanosItem">Mapeamento Regional</li>
                        </ul>
                    </div>
                </li>
                <li className="liPlanosRoxo" data-popular="RECOMENDADO">
                    <div className="liPlanosDesc">
                        <h3 className="liPlanosTitle">PARCERIA ESPECIAL</h3>
                        <p className="liPlanosHeading2 liPlanosPreco">R$300,00</p>/Mês
                        <p className="liPlanosHeading2 liPlanosPreco">R$2.520,00</p>/Ano
                        <br />
                        <br />

                        <ul className="liPlanosItemBranco">
                        <li className="liPlanosItem">Indicação</li>
                            <li className="liPlanosItem">Mapeamento Regional</li>
                            <li className="liPlanosItemBranco">Ranking de Recomendação</li>
                        </ul>
                    </div>
                </li>
                <li className="liPlanosBranco" data-popular="RECOMENDADO">
                    <div className="liPlanosDesc">
                        <h3 className="liPlanosTitle">PUBLICIDADE NORMAL</h3>
                        <p className="liPlanosHeading2 liPlanosPreco">R$100,00</p>/Mês
                        <p className="liPlanosHeading2 liPlanosPreco">R$960,00</p>/Ano
                        <br />
                        <br />

                        <ul className="liPlanosItem">
                            <li className="liPlanosItem">Divulgação em Rede Sociais</li>
                            <li className="liPlanosItem">Divulgação no nosso Site</li>
                        </ul>
                    </div>
                </li>
                <li className="liPlanosTeal" data-popular="RECOMENDADO">
                    <div className="liPlanosDesc">
                        <h3 className="unlogged-title">PUBILICIDADE EXTRA</h3>
                        <p className="liPlanosHeading2 liPlanosPreco">R$150,00</p>/Mês
                        <p className="liPlanosHeading2 liPlanosPreco">R$1.296,00</p>/Ano
                        <br />
                        <br />

                        <ul className="liPlanosItemBranco">
                            <li className="liPlanosItemBranco">Divulgação em Rede Sociais</li>
                            <li className="liPlanosItemBranco">Sobe no Ranking para destaques</li>
                            <li className="liPlanosItemBranco">Mais vezes divulgado</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Site;