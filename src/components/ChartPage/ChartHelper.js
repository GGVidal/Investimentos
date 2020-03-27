import moment from 'moment';

const returnDataTesouroDireto = (money, date) => {
    const actualDate = moment('26-03-2020','DD-MM-YYYY');
    let currentDate = moment(date,'DD-MM-YYYY');
    const percentagePerMonth = 0.0083;
    const chartDate = [];
    
    const months = actualDate.diff(currentDate, 'months');

    for(let i = 1; i <= months; i++) {
        let currentPercentage = percentagePerMonth * i;
        // let valueWithDecimal = money * currentPercentage;
        chartDate.push({data: currentDate, moneyValue: currentPercentage});
        currentDate = moment(currentDate,"DD-MM-YYYY").add('month',1).format('DD-MM-YYYY');
    }
    return chartDate
}

export default returnDataTesouroDireto;