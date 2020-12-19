'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeDetailsSchema = new Schema({
  emp_id: {
    type: String,
    required: true,
    unique: true
  },
  emp_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
},
{
  collection: "employeeDetails",
  timestamps: true
});


module.exports = EmployeeDetailsSchema;