
'use strict'

// var fs = require('fs')
// const dir = '.';

/**
 * Module exports.
 * @public
 */


/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */


// fs.readdir(dir, (err, files) => {
//     console.log(files.length);
//     files.forEach(file => {
//         console.log(file);
//       });
// });




module.exports = function counterFile() {

    var fs = require('fs')
    const dir = '.';


    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        files.forEach(file => {
            console.log(file);
          });
    });
}

