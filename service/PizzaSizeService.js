'use strict';


/**
 * To Delete pizza-size .
 *
 * pk String pk value should be object id of pizza size
 * no response value expected for this operation
 **/
exports.pizza_sizePkDELETE = function(pk) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get pizza-size details
 *
 * pk String object id of pizza-size
 * returns pizzasize
 **/
exports.pizza_sizePkGET = function(pk) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "size" : "size"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To update the pizza-size.
 *
 * body Pizzasize  (optional)
 * pk String pk value should be the object id of pizza-size
 * returns inline_response_201_2
 **/
exports.pizza_sizePkPATCH = function(body,pk) {
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
 * To add a new pizza size
 *
 * body Pizzasize  (optional)
 * pk String Any value
 * returns inline_response_201_2
 **/
exports.pizza_sizePkPUT = function(body,pk) {
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

