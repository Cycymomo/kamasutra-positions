'use strict';
var ava = require('ava');
var kamasutraPositions = require('./');

ava(function (t) {
  t.assert(kamasutraPositions.all.length > 0);
  t.assert(kamasutraPositions.random());
  t.assert(kamasutraPositions.random() !== kamasutraPositions.random());
  t.assert(kamasutraPositions.all[0] === 'Afternoon Delight');
  t.end();
});
