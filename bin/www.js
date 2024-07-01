

var debug = require('debug')('exer:server');

var app=require('../app');
var http = require('http'); 

var port = normalizePort(process.env.PORT || '3000'); //set port to 3000, string
app.set('port', port);
//normalize port into a number, string, or false
/* 
 create HTTP server, and listen on port
*/
var server = http.createServer(app);
server.listen(port);
//event listener for HTTP server "listening" event
server.on('error', onError);
server.on('listening', onListening);



// Normalize a port into a number, string, or false.
function normalizePort(val){
  var port = parseInt(val, 10); //parse base 10

  if(isNaN(port)){
    return val; // not a number, then pass original
  }
  if(port >= 0){
    return port;
  }
return false; 
}


function onError(error){
  if(error.syscal !=='listen'){
    throw error;
  }

var bind = typeof port === 'string'
? 'Pipe ' + port : 'Port ' + port;


//switch between Access error or inuse error

 switch(error.code){
    case 'EACCES':
      console.error(bind + 'requires elevated privileges'); 
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + 'is already in use');
      process.exit(1);
      break;
      default:
        throw error;
 }


}

function onListening(){
  var addr = server.address();
  var bind = typeof port ==='string'
  ? 'pipe ' +port : 'port ' + port;

  debug('Listening on ' + bind);
}