var i_log = require("i-log")("AMQ_INTERFACE");

/*
var amqp = require('amqp');
var connection = amqp.createConnection({ host: config.amqp.host });
 
// add this for better debuging 
connection.on('error', function(e) {
  console.log("Error from amqp: ", e);
});
 
// Wait for connection to become established. 
connection.on('ready', function () {
  // Use the default 'amq.topic' exchange 
  connection.queue('my-queue', function (q) {
      // Catch all messages 
      q.bind('#');
    
      // Receive messages 
      q.subscribe(function (message) {
        // Print messages to stdout 
        console.log(message);
      });
  });
});
*/

var dispatchMessage = function(data, callback){
    i_log.debug("dispatch data", data);
};

module.exports ={
    dispatchMessage: dispatchMessage
};var i_log = require("i-log")("i-bet365");
