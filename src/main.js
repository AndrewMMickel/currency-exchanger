import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import currencyConvert from "./c-exchanger.js";

$(document).ready(function () {
  $(":submit").on('click', async function (event) {
    event.preventDefault();
    let conversion = new currencyConvert();
    let userInput = $("#conversionAmount").val();
    if (userInput < 0) {
      $("#amountAfterConversion").hide();
      $(".show-Errors").text("Please input a non-negative number").show();
      return;
    } else {
      $(".show-Errors").hide();
      conversion.amount = $("#conversionAmount").val();
      let currentRate = await conversion.conversionRate();

      conversion.rates = currentRate;
      let rateSelected = conversion.getCurrencyValues();
      $("#amountAfterConversion").text(
        conversion.calculateAndPrintFinal(rateSelected)
      ).show();
    }
  });
});