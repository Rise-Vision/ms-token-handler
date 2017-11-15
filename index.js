const crypto = require("./crypto.js");
const verify = require("./verify.js");
const makeToken = require("./make-token.js");

module.exports = {
  encryptAndHash: crypto.encryptAndHash,
  makeToken,
  verify
}
