const crypto = require("./crypto.js");

module.exports = (data = {}, hash, mstokenKey) => {
  const {displayId, filePath, timestamp} = data;
  if (!displayId || !filePath || !timestamp) {throw Error("invalid params");}

  return hash === crypto.encryptAndHash(data, mstokenKey)
}
