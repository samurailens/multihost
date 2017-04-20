var application_root = __dirname,
    express = require( 'express' ),
    vhost = require( 'vhost' );

function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static( dirPath ));
}

//Create server
var app = express();

//Create the virtual hosts
var potatoHost = createVirtualHost("www.potato.com", "./potato");
var tomatoHost = createVirtualHost("www.tomato.com", "./tomato");

//Use the virtual hosts
app.use(potatoHost);
app.use(tomatoHost);

//Start server
var port = 80;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});