import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import currencyConvert from "./c-exchanger.js";

let currentrate = [];

$(document).ready(function () {
  $(":submit").click(function (event) {
    event.preventDefault();
    currentrate = currencyConvert.getCurrencyValues(
      currencyConvert.conversionRate()
    );
    $("#amountafterconversion").text(currentrate);
  });
});