
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

module.exports = Counter

/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */

function Counter (req) {
//   if (!(this instanceof Accepts)) {
//     return new Accepts(req)
//   }

//   this.headers = req.headers
//   this.negotiator = new Negotiator(req)


    fs.readdir(dir, (err, files) => {
        return files.length;
    });

}