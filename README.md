# DB_ASSIGNMENT

Dependencies
Create a local mongo db instance and create a document employeeDetails and add the below records 

[{
  "_id": {
    "$oid": "5fdd0e754073092138a834ad"
  },
  "emp_id": "7000",
  "emp_name": "test1",
  "location": "chennai"
},{
  "_id": {
    "$oid": "5fdd0e754073092138a834ae"
  },
  "emp_id": "7001",
  "emp_name": "test2",
  "location": "chennai"
},{
  "_id": {
    "$oid": "5fdd0e754073092138a834af"
  },
  "emp_id": "7002",
  "emp_name": "test3",
  "location": "chennai"
},{
  "_id": {
    "$oid": "5fdd0e754073092138a834b0"
  },
  "emp_id": "7003",
  "emp_name": "test4",
  "location": "chennai"
},{
  "_id": {
    "$oid": "5fdd0e754073092138a834b1"
  },
  "emp_id": "7004",
  "emp_name": "test5",
  "location": "chennai"
}]

To start the app

Install stable version of node js
npm init
node verify_data.js

This will compare the details present in your db and a local file and print the results.
