'use strict';

var utils = require('../utils/writer.js');
var Pizza = require('../service/PizzaService');

module.exports.pizzaPkDELETE = function pizzaPkDELETE (req, res, next, pk) {
  Pizza.pizzaPkDELETE(pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizzaPkGET = function pizzaPkGET (req, res, next, pk) {
  Pizza.pizzaPkGET(pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizzaPkPATCH = function pizzaPkPATCH (req, res, next, body, pk) {
  Pizza.pizzaPkPATCH(body, pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizzaPkPUT = function pizzaPkPUT (req, res, next, body, pk) {
  Pizza.pizzaPkPUT(body, pk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pizza_listPageGET = function pizza_listPageGET (req, res, next, page, type, size) {
  Pizza.pizza_listPageGET(page, type, size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
