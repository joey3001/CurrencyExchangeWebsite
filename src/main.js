import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeFetch from './js/ExchangeFetch.js';


$('#exchange').submit(function() {
  event.preventDefault(); 
  let money = $('#money').val(); 
  let currency = $('#alternateCurrency').val();
  ExchangeFetch.makeApiCall(money, currency);
});