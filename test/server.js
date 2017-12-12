'use strict';

const Code = require('code');
const Lab = require('lab');
const server = require('../index.js');

const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;

const expect = Code.expect;

before((done) => {

    // Callback fires once the server is initialized
    // or immediately if the server is already initialized
    server.labbableReady((err) => {

        if (err) {
            return done(err);
        }

        return done();
    });
});

describe('The server', () => {

    it('initializes.', (done) => {

        expect(server.isInitialized()).to.equal(true);
        done();
    });


    it('returns the hello message as text.', (done) => {

        server.inject('/', (response) => {

            expect(response.payload).to.equal('Hello from hapi!');
            done();
        });
    });

    it('returns the hello message as json.', (done) => {

        server.inject('/json', (response) => {

            const jsonResponse = JSON.parse(response.payload);

            expect(jsonResponse.message).to.equal('Hello from hapi!');
            done();
        });
    });
});
