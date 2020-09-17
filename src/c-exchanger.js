import $ from "jquery";
export default class currencyConvert {
  static async conversionRate() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
  static async getCurrencyValues(response) {
    if (response.ok) {
      $("#amountafterconversion").text(
        `The current rates are as follows ${response.conversion_rates}`
      );
    } else {
      $("#amountafterconversion").text(
        `An error occured - ${response.message}`
      );
    }
  }
  static async getConversionObject() {
    currencyConvert.conversionRate().then((response) => {
      return response;
    });
  }
}