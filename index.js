"use strict";
const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
const data = require("./data.js");

module.exports.get = (event, context, callback) => {
  // fetch requested category from path Params
  const { category } = event.pathParameters;
  // fetch category data
  const categoryData = data.filter((item) => item.category_name === category);
  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify(categoryData),
  };
  callback(null, response);
};

module.exports.list = (event, context, callback) => {};
