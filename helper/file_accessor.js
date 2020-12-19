'use strict'

let fs = require('fs');
const csv = require('csv-parser');

class  readCSV {
    constructor() {

    }
     readCSV = (filename) => {
        return new Promise((resolve, reject) => {
          const result = [];
          fs.createReadStream(filename)
            .pipe(csv())
            .on('data', function(data) {
              if(data) {
                result.push(data);
              }
            })
            .on('end', function() {
              console.log(`Count of docs :`, result.length);
              return resolve(result);
            })
            .on('error', function(error) {
              reject(error);
            })
        })
      }

}

module.exports = readCSV;