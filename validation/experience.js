const Validator = require("validator");
const isEmpty = require("./is-empty");
//import isEmpty from "./is-empty"; //es6

module.exports = function validateExperienceInput(data) {
  let errors = {}; //set empty object

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From Date field isFrom Date";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
