'use strict';


/**
 * To Delete the inventory batch.
 *
 * pk Integer pk value should be primary key to delete the inventory batch
 * no response value expected for this operation
 **/
exports.pizzaPkDELETE = function(pk) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get pizza details
 *
 * pk String object id of pizza
 * returns inline_response_201
 **/
exports.pizzaPkGET = function(pk) {
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
 * To update the pizza.
 *
 * body Pizza  (optional)
 * pk String pk value should be the object id of pizza
 * returns inline_response_201
 **/
exports.pizzaPkPATCH = function(body,pk) {
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
 * body Pizza  (optional)
 * pk String Any value
 * returns inline_response_201
 **/
exports.pizzaPkPUT = function(body,pk) {
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
 * get pizza-list using query
 *
 * page String page number
 * type String regular or square (optional)
 * size String to filter pizza list by size (optional)
 * returns List
 **/
exports.pizza_listPageGET = function(page,type,size) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

