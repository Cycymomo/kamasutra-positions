'use strict';
var uniqueRandomArray = require('unique-random-array');
var kamasutraPositions = require('./kamasutra-positions.json');

exports.all = kamasutraPositions;
exports.random = uniqueRandomArray(kamasutraPositions);
