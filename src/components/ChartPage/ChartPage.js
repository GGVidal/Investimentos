import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const style = {
  paddingTop: '8px'
}
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 200, pv: 2400, amt: 2400 }
];
const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);
const ChartPage = () => {
  return (
    <div className="ui center aligned basic segment">
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <div class="ui label big" style={style}>
              <label>Valor a ser investido</label>
            </div>
            <input type="number" placeholder="R$" />
          </div>
          <div className="field">
            <div className="ui label big" style={style}>
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
            <div className="ui label big" style={style}>
              <label>Período</label>
            </div>
            <input type="month" style={{height: '30px', padding: '8px'}} />
          </div>
        </div>
      </div>
      <div className="ui section divider"></div>
      <div className="ui vertical segment">{renderLineChart}</div>
    </div>
  );
};

export default ChartPage;
