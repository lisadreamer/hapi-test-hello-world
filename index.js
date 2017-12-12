'use strict';

const Hapi = require('hapi');
const Labbable = require('labbable');

//Create server and connection
const server = module.exports = new Hapi.Server();
server.connection({
    port: 3000
});

//Register good plugin and start the server
server.register([{
    register: require('good'),
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, {
    register: Labbable.plugin
}, {
    register: require('./routes')
}], (err) => {

    if (err) {
        throw err;
    }

    server.initialize((err) => {

        if (err) {
            throw err;
        }

        // Don't continue to start server if module
        // is being require()'d (likely in a test)
        if (!module.parent) {

            // Starting the server
            server.start((err) => {

                if (err) {
                    throw err;
                }

                console.log('Server running at:', server.info.uri);
            });
        }
    });
});
