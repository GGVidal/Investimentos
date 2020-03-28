import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import {returnDataTesouroDireto, returnDataBitcoin, createRequest} from "./ChartHelper";
import { useAlert } from "react-alert";

const style = {
  paddingTop: "10px"
};
//TO DO VALIDACAO NOS CAMPOS
const renderLineChart = (data) => (
  <LineChart width={1500} height={500} data={data}>
    <Line type="monotone" dataKey="valor" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="data" />
    <YAxis />
    <Tooltip />
  </LineChart>
);



const ChartPage = () => {

  const alert = useAlert()
  const [chartData, setChartData] = useState();
  const [date, setDate] = useState("");
  const [moneyValue, setMoneyValue] = useState(0);
  const [investment, setInvestment] = useState("");
  
  const onClickEvent = async () => {
    if(moneyValue) {
      if(date){
        if(investment) {
          alert.success("Aguarde o processamento do investimento");
          setTimeout(()=> investment === 'TD'? setChartData(returnDataTesouroDireto(moneyValue,date)) : onRequest(),1000)
          
        } else {
          alert.show("Por favor preencha o tipo de investimento")
        }
      } else {
        alert.show("Por favor preencha a data inicial")
      }
    } else {
      alert.show("Por favor preencha o valor que deseja investir");
    }
  }


  const onRequest = async() => {
    const response = await createRequest(date).get();
    setChartData(response.data.Data);
  }

  const value = investment === 'TD'? chartData : returnDataBitcoin(chartData, moneyValue);
  console.log(value);

  return (
    <div className="ui center aligned basic segment">
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <div className="ui label large" style={style}>
              <label>Valor a ser investido</label>
            </div>
            <input
              type="number"
              onChange={input => setMoneyValue(input.target.value)}
              placeholder="R$"
              style={{ height: "30px" }}
            />
          </div>
          <div className="field">
            <div className="ui label large" style={style}>
              <label>Tipo de investimento</label>
            </div>
            <div className="ui radio checkbox">
              <input type="radio" value="BTC" checked={investment === 'BTC'} onChange={(radio)=> setInvestment(radio.target.value)} />
              <label>Bitcoin</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" value="TD" checked={investment === 'TD'} onChange={(radio)=> setInvestment(radio.target.value)} />
              <label>Tesouro Direto</label>
            </div>
          </div>
          <div className="field">
            <div className="ui label large" style={style}>
              <label>Período</label>
            </div>
            <input
              type="date"
              style={{ height: "25px" }}
              onChange={input => setDate(input.target.value)}
            />
          </div>
          <div className="field">
            <button
              onClick={onClickEvent}
              className="ui right labeled icon button"
              style={{ backgroundColor: "#3F51B5", color: "white" }}
            >
              <i className="right arrow icon"></i>
              Calcular
            </button>
          </div>
        </div>
      </div>
      <div className="ui section divider"></div>
      <div className="ui vertical segment">{renderLineChart(value)}</div>
    </div>
  );
};

export default ChartPage;
