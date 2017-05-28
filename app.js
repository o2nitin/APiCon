var request = require("request");

request({
  uri: "dhttps://obscure-sea-45533.herokuapp.com/api/customersa",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
}, function(error, response, body) {
  if(error){
    console.log(error);
  }
  console.log(body);
});