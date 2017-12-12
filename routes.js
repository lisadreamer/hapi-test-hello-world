'use strict';

exports.register = function (server, options, next) {

    //Creating routes
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            return reply('Hello from hapi!');
        }
    });

    server.route({
        method: 'GET',
        path: '/json',
        handler: function (request, reply) {

            return reply({
                message: 'Hello from hapi!'
            });
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'routes'
};
