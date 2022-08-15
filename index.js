"use strict";
const AWS = require("aws-sdk"); 
//import data from local js file
const data = require("./data.js");

module.exports.get = (event, context, callback) => {
  // fetch requested category from path Params
  const { category } = event.pathParameters;
  const result = [];
  // fetch category data
  const categoryData = data.find((item) => item.category_name === category);
  // add data to the result array
  categoryData && result.push(categoryData);
  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  callback(null, response);
};

module.exports.list = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  };
  callback(null, response);
};
