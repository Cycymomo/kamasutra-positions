#!/usr/bin/env node
'use strict';
var meow = require('meow');
var kamasutraPositions = require('./');

var cli = meow({
  help: [
    'Examples',
    '  $ kamasutra-positions',
    '  Classic',
    '',
    '  $ kamasutra-positions --all',
    '  display all positions',
    '',
    'Options',
    '  --all   Get all positions instead of a random one'
  ]
});

console.log(cli.flags.all ? kamasutraPositions.all.join('\n') : kamasutraPositions.random());
