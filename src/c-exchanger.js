import $ from "jquery";
export default class currencyConvert {
  constructor() {
    this.amount = 0;
    this.rates = {};
  }
  async conversionRate() {
    return new Promise(function (resolve, reject) {
      let apicall = new XMLHttpRequest();
      const apiurl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      apicall.onload = function () {
        if (this.status === 200) {
          return resolve(JSON.parse(apicall.response));
        } else {
          reject(apicall.response);
        }
      };
      apicall.open("GET", apiurl, true);
      apicall.send();
    });
  }
  getCurrencyValues() {
    if ($("#newcurrency").val() === "AUD") {
      let selectedcurrency = this.rates.conversion_rates.AUD;
      return selectedcurrency;
    } else if ($("#newcurrency").val() === "EUR") {
      let selectedcurrency = this.rates.conversion_rates.EUR;
      return selectedcurrency;
    } else if ($("#newcurrency").val() === "GBP") {
      let selectedcurrency = this.rates.conversion_rates.GBP;
      return selectedcurrency;
    } else if ($("#newcurrency").val() === "CAD") {
      let selectedcurrency = this.rates.conversion_rates.CAD;
      return selectedcurrency;
    } else if ($("#newcurrency").val() === "PKR") {
      let selectedcurrency = this.rates.conversion_rates.PKR;
      return selectedcurrency;
    }
  }
  calculateAndPrintFinal(currencyvalueparsed) {
    let amount = $("#conversionamount").val();
    let conversionrate = currencyvalueparsed;
    let convertedamount = conversionrate * amount;
    return `The initial amount was ${amount}.  The conversion rate is ${conversionrate}. The amount after conversion is ${convertedamount}`;
  }
}