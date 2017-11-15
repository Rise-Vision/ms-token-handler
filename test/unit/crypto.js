/* eslint-env mocha */
const crypto = require("../../crypto.js");
const assert = require("assert");
const sha1len = 40
const keyBytes = 32
const mstokenKey = "0".repeat(keyBytes);

describe("Crypto", ()=>{
  it("encrypts then hashes as a signature for a js object", ()=>{
    const testObj = {
      one: 1,
      two: 2
    };

    assert.equal(crypto.encryptAndHash(testObj, mstokenKey).length, sha1len);
  });
});
