'use strict';

var utils = require('../utils/writer.js');
var PizzaTopping = require('../service/PizzaToppingService');

module.exports.pizza_toppingPkDELETE = function pizza_toppingPkDELETE (req, res, next, pk) {
  PizzaTopping.pizza_toppingPkDELETE(pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_toppingPkGET = function pizza_toppingPkGET (req, res, next, pk) {
  PizzaTopping.pizza_toppingPkGET(pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_toppingPkPATCH = function pizza_toppingPkPATCH (req, res, next, body, pk) {
  PizzaTopping.pizza_toppingPkPATCH(body, pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_toppingPkPUT = function pizza_toppingPkPUT (req, res, next, body, pk) {
  PizzaTopping.pizza_toppingPkPUT(body, pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
