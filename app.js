var request = require("request");

var call = function(error, response, body) {
                if(error){
                  console.log(error);
                }
                console.log(body);
              };
var getoption = {
                uri: "https://obscure-sea-45533.herokuapp.com/api/customers",
                method: "GET",
                timeout: 10000,
                followRedirect: true,
                maxRedirects: 10
              } ;
request(getoption,call);

/*
module.exports = {
  getRequest: function () {
       //   request(getoption,call);
  },
  postRequest: function () {
    // whatever
  }
};
*/
