'use strict';

// var Joi = require('joi');
var _ = require('lodash');

module.exports = {

  handler: function(request, reply) {
    var inputs = ((request.params.z).split(','));
    inputs = _.map(inputs, function(x) { return x * 1; });
    console.log(inputs);
    inputs = _.filter(inputs, function(n) { return _.isNumber(n); });
    var outputs = _.map(inputs, function(x) { return x * x; });
    var zips = _.zip(inputs, outputs);
    console.log(inputs, outputs);
    reply.view('templates/math/squares', {z:zips});
  }
};
