import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import currencyConvert from "./c-exchanger.js";

$(document).ready(function () {
  $(":submit").click(async function (event) {
    let conversion = new currencyConvert();
    conversion.amount = $("#conversionamount").val();
    event.preventDefault();
    let currentrate = await conversion.conversionRate();
    conversion.rates = currentrate;
    let rateselected = conversion.getCurrencyValues();
    $("#amountafterconversion").text(
      conversion.calculateAndPrintFinal(rateselected)
    );
  });
});