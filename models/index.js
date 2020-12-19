'use strict'

const { appDbConnection } = require('../db_accessors/db');
const EmployeeDetailsSchema = require('./EmployeeDetails.js');


const EmployeeDetails = appDbConnection.model('EmployeeDetails', EmployeeDetailsSchema);

module.exports = { EmployeeDetails }