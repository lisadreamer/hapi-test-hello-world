'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const expect = Code.expect;
const test = lab.test;

test('returns true when 1 + 1 equals 2', (done) => {

    expect(1 + 1).to.equal(2);
    done();
});
