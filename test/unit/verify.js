/* eslint-env mocha */
const crypto = require("../../crypto.js");
const verify = require("../../verify.js");
const assert = require("assert");
const keyBytes = 32
const mstokenKey = "0".repeat(keyBytes);


const data = {
  displayId: "213321",
  timestamp: 32131234,
  filePath: "bucket/file"
};
const hash = crypto.encryptAndHash(data, mstokenKey);

describe("Verify", ()=>{
  it("verify token fail if data is not correct", ()=>{
    assert.throws(verify.bind(null), /invalid params/);
    assert.throws(verify.bind({displayId: "123213"}), /invalid params/);
    assert.throws(verify.bind({displayId: "123213", timestamp: 32131234}), /invalid params/);
  });

  it("verify token is ok", ()=>{
    assert(verify(data, hash, mstokenKey));
  });
});
