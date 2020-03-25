import React from "react";
import {Link} from 'react-router-dom';

import "../InformationPage/informationPage.css";
import Image from "../../assets/grafico-bitcoin.jpg";


const InformationPage = () => {
  return (
    <div id="mainDiv" className="ui vertical stripe segment">
      <div className="ui middle aligned stackable grid container">
        <div className="row">
          <div className="eight wide column ui segment">
            <h3 className="ui header">
              Simule seus investimentos em Bitcoin e Tesouro direto
            </h3>
            <p className="smallText">
              Coloque a quantia desejada e o periodo de tempo que você achar
              adequado
            </p>
            <div className="ui section divider"></div>
            <h3 className="ui header">Análise gráfica</h3>
            <p className="smallText">
              Você pode analisar mais detalhadamente seus valores ao passar o
              mouse pelo gráfico
            </p>
            <div className="ui section divider"></div>
            <h3 className="ui header">Compare investimentos</h3>
            <p className="smallText">
              Simule a rentabilidade de investimentos dentro de um mesmo período
              e descubra qual o mais vantajoso
            </p>
          </div>
          <div className="six wide right floated column">
            <img src={Image} className="ui large bordered rounded image" />
          </div>
        </div>
        <div className="row">
          <div className="center aligned column">
            <a className="ui huge button"><Link to="/chart">Simule agora</Link></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
