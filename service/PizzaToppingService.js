'use strict';


/**
 * To Delete pizza topping.
 *
 * pk String pk value should be object id of pizza topping
 * no response value expected for this operation
 **/
exports.pizza_toppingPkDELETE = function(pk) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get pizza-topping details
 *
 * pk String object id of pizza-topping
 * returns pizzatopping
 **/
exports.pizza_toppingPkGET = function(pk) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "topping" : "topping"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To update the pizza-topping.
 *
 * body Pizzatopping  (optional)
 * pk String pk value should be the object id of pizza-topping
 * returns inline_response_201_1
 **/
exports.pizza_toppingPkPATCH = function(body,pk) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To create a new pizza Entry batch
 *
 * body Pizzatopping  (optional)
 * pk String Any value
 * returns inline_response_201_1
 **/
exports.pizza_toppingPkPUT = function(body,pk) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

