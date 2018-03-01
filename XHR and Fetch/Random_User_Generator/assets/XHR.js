var fullName = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var img = document.querySelector("#avatar");
var btn = document.querySelector("#btn");
var url = "https://randomuser.me/api/";
btn.addEventListener("click", function(){
  fetch(url)
  .then(handleError)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayError)
})

function handleError(response){
  if(!response.ok){
    throw Error(response.status);
  }
  return response;
}

function parseJSON(data){
  return data.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function updateProfile(result){
  fullName.innerHTML = result.name.first + " "  + result.name.last;
  username.innerHTML = result.login.username;
  email.innerHTML = result.email;
  city.innerText = result.location.city;
  img.src = result.picture.medium;
 }

function displayError(error){
  console.log(error);
}