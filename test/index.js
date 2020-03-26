'use strict'

// Attach Chai APIs to global scope
const { expect, should, assert } = require('chai');
global.expect = expect;
global.should = should;
global.assert = assert;

// Initilization
require('./init');
