const crypto = require("./crypto.js");
const verify = require("./verify.js");
const makeToken = require("./makeToken.js");

module.exports = {
  encryptAndHash: crypto.encryptAndHash,
  makeToken,
  verify
}
