import $ from "jquery";
export default class currencyConvert {
  constructor() {
    this.amount = 0;
    this.rates = {};
  }
  async conversionRate() {
    if (!process.env.API_KEY) {
      $(".showErrors").text("Please create an environmental variable and store your API key");
      return;
    }
    return new Promise(function (resolve, reject) {
      let apicall = new XMLHttpRequest();
      const apiurl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      apicall.onload = function () {
        if (this.status === 200) {
          return resolve(JSON.parse(apicall.response));
        } else {
          $(".showErrors").text(`Your API call responded with an ${this.status["error-type"]} error`);
          reject(apicall.response);
        }
      };
      apicall.open("GET", apiurl, true);
      apicall.send();
    });
  }
  getCurrencyValues() {
    if (this.rates.result === "error") {
      $(".showErrors").text(`There was a problem. The site responded with an ${this.rates["error-type"]} error. For more information please go to https://www.exchangerate-api.com/docs/standard-requests and navigate to 'Standard Endpoint' to find your error.`).show();
      $("#amountAfterConversion").hide();
    } else if ($("#newCurrency").val() === "AUD") {
      let selectedcurrency = this.rates.conversion_rates.AUD;
      return selectedcurrency;
    } else if ($("#newCurrency").val() === "EUR") {
      let selectedcurrency = this.rates.conversion_rates.EUR;
      return selectedcurrency;
    } else if ($("#newCurrency").val() === "GBP") {
      let selectedcurrency = this.rates.conversion_rates.GBP;
      return selectedcurrency;
    } else if ($("#newCurrency").val() === "CAD") {
      let selectedcurrency = this.rates.conversion_rates.CAD;
      return selectedcurrency;
    } else if ($("#newCurrency").val() === "PKR") {
      let selectedcurrency = this.rates.conversion_rates.PKR;
      return selectedcurrency;
    }
  }
  calculateAndPrintFinal(currencyValueParsed) {
    let amount = $("#conversionAmount").val();
    let conversionRate = currencyValueParsed;
    let convertedAmount = conversionRate * amount;
    return `The initial amount was ${amount}.  The conversion rate is ${conversionRate}. The amount after conversion is ${convertedAmount}`;
  }
}

//this.status