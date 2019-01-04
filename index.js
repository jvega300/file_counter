
'use strict'

/**
 * Module dependencies.
 * @private
 */

var fs = require('fs')
const dir = './';

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

module.exports = function counterFile () {
//   if (!(this instanceof Accepts)) {
//     return new Accepts(req)
//   }

//   this.headers = req.headers
//   this.negotiator = new Negotiator(req)

    console.log("counterFile inicializando");

    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        return files.length;
    });
}