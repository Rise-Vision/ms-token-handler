const crypto = require("./crypto.js");

export default {
  verify(data = {}, hash, mstokenKey)=>{
    const {displayId, filePath, timestamp} = data;
    if (!displayId || !filePath || !timestamp) {throw Error("invalid params");}

    return hash === crypto.encryptAndHash(data, mstokenKey)
  }
}
