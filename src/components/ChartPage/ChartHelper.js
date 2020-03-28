import moment, { now } from "moment";
import axios from "axios";

const returnDataTesouroDireto = (money, date) => {
  date = moment(date).format("DD-MM-YYYY");
  const finalDate = moment("26-03-2020", "DD-MM-YYYY");
  let dateSelected = moment(date, "DD-MM-YYYY")._i;
  const percentagePerMonth = 0.0083;
  const chartDate = [];

  const months = finalDate.diff(dateSelected, "months");

  for (let i = 0; i <= months; i++) {
    let currentPercentage = percentagePerMonth * i;

    let valueWithDecimal = money * currentPercentage;
    let percentageValue = parseFloat(money) + valueWithDecimal;
    console.log(percentageValue);
    chartDate.push({ data: dateSelected, valor: percentageValue });
    dateSelected = moment(dateSelected, "DD-MM-YYYY")
      .add("month", 1)
      .format("DD-MM-YYYY");
  }
  console.log(chartDate);
  return chartDate;
};


const createRequest = date => {
  date = moment(date).format("DD-MM-YYYY");

  let dateNow = date;
  const dateUsed = moment(date, "DD-MM-YYYY")._i

//   dateNow = moment(dateNow, "DD-MM-YYYY").format("DD-MM-YYYY");

  const limit = moment().diff(dateUsed, "days")
  console.log(limit)

  const request = axios.create({
    baseURL:
      `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=BRL&limit=${limit}&api_key=68df12ed315135c6097cb11f370ca44964bc52462d1dc0e51da206489ca72efb`
  });
  return request
};


const returnDataBitcoin = (requestData, money) => {
  if (requestData) {
    const { TimeFrom, TimeTo, Data } = requestData;

    let selectedDate = moment(moment.unix(TimeFrom), "DD-MM-YYYY");
    let convertedTimeTo = moment(moment.unix(TimeTo), "DD-MM-YYYY");

    const months = convertedTimeTo.diff(selectedDate, "months");

    let chartDate = [];

    selectedDate = moment(selectedDate, "DD-MM-YYYY");

    for (let i = 0; i <= months; i++) {
      const quantityBTC = money / Data[0].close;
      const findData = Data.find(
        data => data.time === moment(selectedDate).unix()
      );
      let fullValue = quantityBTC * findData.close;
      chartDate.push({
        data: selectedDate.format("DD-MM-YYYY"),
        valor: fullValue
      });
      selectedDate = moment(selectedDate, "DD-MM-YYYY").add("month", 1);
    }
    return chartDate;
  }
};

export { returnDataBitcoin };
export { createRequest };

export { returnDataTesouroDireto };
