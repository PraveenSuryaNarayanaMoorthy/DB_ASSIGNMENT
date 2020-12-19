'use strict'

const { EmployeeDetails }  = require('../models/index');

class EmployeeDetailsDBAccessor {
  constructor() {
  }

  async fetchEmployeeDetails() {
    try {
      let records = await EmployeeDetails.find();
      if(records.length == 0) {
        throw "No records found error"
      }
      return records;
    } catch(error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = EmployeeDetailsDBAccessor;