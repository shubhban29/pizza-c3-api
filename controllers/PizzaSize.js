'use strict';

var utils = require('../utils/writer.js');
var PizzaSize = require('../service/PizzaSizeService');

module.exports.pizza_sizePkDELETE = function pizza_sizePkDELETE (req, res, next, pk) {
  PizzaSize.pizza_sizePkDELETE(pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_sizePkGET = function pizza_sizePkGET (req, res, next, pk) {
  PizzaSize.pizza_sizePkGET(pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_sizePkPATCH = function pizza_sizePkPATCH (req, res, next, body, pk) {
  PizzaSize.pizza_sizePkPATCH(body, pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_sizePkPUT = function pizza_sizePkPUT (req, res, next, body, pk) {
  PizzaSize.pizza_sizePkPUT(body, pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
