const _ = require('lodash');

let Helper = require('./helper/file_accessor.js');
let Details = require('./db_accessors/employeeDetails_db_accessor.js');

let details = new Details();
let helper = new Helper();

async function verify() {
   try {
        let db_details = await details.fetchEmployeeDetails();
        let file_details = await helper.readCSV(`${__dirname}/input.csv`);
        let db_emp_id = _.map(db_details,'emp_id');
        let file_emp_id = _.map(file_details,'emp_id');
        let db_dif = _.difference(db_emp_id,file_emp_id);
        let file_dif = _.difference(file_emp_id,db_emp_id);
        let common_ids = _.intersection(db_emp_id,file_emp_id);
        console.log("id present in db but not in file",db_dif);
        console.log("id present in file but not in db", file_dif);
        console.log("id present in both db and file", common_ids);
   } catch (error) {
       console.log(error);
       
   }
}

let result = verify().then(res => {
    process.exit(0);
}).catch(err => {
    console.log(err);
});