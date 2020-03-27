import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import Momento from "./ChartHelper";
const style = {
  paddingTop: "10px"
};

const data = Momento(1000,'10-03-2019')
const renderLineChart = (
  <LineChart width={1500} height={1500} data={data}>
    <Line type="monotone" dataKey="moneyValue" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="data" />
    <YAxis />
    <Tooltip/>
  </LineChart>
);
const ChartPage = () => {
  const [date, setDate] = useState("");
  return (
    <div className="ui center aligned basic segment">
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <div className="ui label large" style={style}>
              <label>Valor a ser investido</label>
              {console.log(Momento(1000,'10-03-2019'))}
            </div>
            <input type="number" placeholder="R$" style={{ height: "30px" }} />
          </div>
          <div className="field">
            <div className="ui label large" style={style}>
              <label>Tipo de investimento</label>
            </div>
            <div className="ui radio checkbox">
              <input type="radio" name="frequency" />
              <label>Bitcoin</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="frequency" />
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
      <div className="ui vertical segment">{renderLineChart}</div>
    </div>
  );
};

export default ChartPage;
