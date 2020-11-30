import $ from 'jquery';
export default class ExchangeFetch {

  static async currencyCall() {
    try { 
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText); 
      }
      return response.json();
    } 
    catch(error) {
      return error.message;
    }
  }

  static getElements(response, money, currency) {
    if (response.conversion_rates) {
      if (response.conversion_rates[currency]) {
        $('#output').text('The exchanged value is: ' + (parseFloat(money)*response.conversion_rates[currency]).toFixed(2));
      }
      else {
        $('#output').text('That is not a currency supported by this application. Please try another currency');
      }
    }
    else if (typeof(response) === 'object') {
      $('#output').text(`There was the following error: ${response['error-type']}`);
    }
    else {
      $('#output').text(`There was the following error: ${response}`);
    }
    $('#output').fadeIn('slow');
  }

  static async makeApiCall(money, currency) {
    const response = await ExchangeFetch.currencyCall();
    ExchangeFetch.getElements(response, money, currency); 
  }
}

