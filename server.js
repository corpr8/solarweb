var connect = require('connect');
var serveStatic = require("serve-static");
var phpcgi = require('node-phpcgi')({
    documentRoot: __dirname,
    // change it to your own path
    handler: '/usr/bin/php-cgi'
});
var app = connect()
    .use(phpcgi)
    .use(serveStatic(__dirname))
	.listen(3001);

console.log('now we are serving php :-)');