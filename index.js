var application_root = __dirname,
    express = require( 'express' ),
    vhost = require( 'vhost' );

var connect = require('connect')
var bodyParser = require('body-parser');

function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static( dirPath ));
}

//Create server
var app = express();

// //Create the virtual hosts
// var potatoHost = createVirtualHost("www.potato.com", "./potato");
// var tomatoHost = createVirtualHost("www.tomato.com", "./tomato");

// //Use the virtual hosts
// app.use(potatoHost);
// app.use(tomatoHost);

// //Start server
// var port = 80;
// app.listen( port, function() {
//     console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
// });
var p = require('./potato');
var t = require('./tomato');

console.log(p)

// express()
//     .use(vhost('potato.com', p)
//     .use(vhost('tomato.com', t)
//     .listen(80)));

var appWithVhost = module.exports = express();

//appWithVhost.use(vhost('potato.com', p)); // Serves first app

// create main app
appWithVhost.use(vhost('www.potato.com', p, function (req, res) {
   console.log('www.potato.com')
  // handle req + res belonging to mail.example.com
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello from potato.com!');
}))

appWithVhost.use(vhost('www.tomato.com', t)); // Serves second app

// app.use(vhost('api.example.com', function (req, res) {
//   // handle req + res belonging to api.example.com
//   // pass the request to a standard Node.js HTTP server
//   httpServer.emit('request', req, res)
// }))


appWithVhost.use(bodyParser.json()); // support json encoded bodies
appWithVhost.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* istanbul ignore next */
if (!module.parent) {
  appWithVhost.listen(80);
  console.log('Express started on port 80');
}