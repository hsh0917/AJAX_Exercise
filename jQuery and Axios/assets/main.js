var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var XHR = new XMLHttpRequest();

var xhrBtn = $("#xhr");
var fetchBtn = $("#fetch");
var jqueryBtn = $("#jquery");
var axiosBtn = $("#axios");
var quoteText = $("#quote");

// XMLHttpRquest
xhrBtn.click(function(){
  XHR.onreadystatechange = function(){
    if(XHR.status == 200 && XHR.readyState == 4){
      var quote = JSON.parse(XHR.responseText);
      quoteText.text(quote);
    }
  }
 XHR.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes" );
 XHR.send();
})

// Fetch
fetchBtn.click(function(){
  fetch(url)
  .then(parsedJSON)
  .catch(displayError)
})

function parsedJSON(data){
  return data.json().then(function(parsedData){
    quoteText.text(parsedData);
  })
}

function dispalyError(error){
  console.log("Error: " + error);
}

// jQuery
jqueryBtn.click(function(){
  $.getJSON(url)
  .done(function(data){
    quoteText.text(data);
  })
  .fail(displayError)  
})

function displayError(data){
  console.log("Error: " + error);  
}

// Axios
axiosBtn.click(function(){
  axios.get(url)
  .then(parsedData)
  .catch(handleErrors)
})

function parsedData(data){
  quoteText.text(data.data[0]);
}

function handleErrors(err) {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log('Error', err.message);
  }
}