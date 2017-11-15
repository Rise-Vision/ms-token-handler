const crypto = require("crypto");

export default {
  encryptAndHash(obj, mstokenKey) {
    const cipherKey = Buffer.from(mstokenKey, "hex")
    const inputBuffer = Buffer.from(JSON.stringify(obj));
    const hasher = crypto.createHash("sha1");
    const cipher = crypto.createCipheriv("aes-128-ecb", cipherKey, "");

    hasher.update(cipher.update(inputBuffer));
    hasher.update(cipher.final());

    const hashResult = hasher.digest("hex");
    console.log(`Hash result ${hashResult}`);
    return hashResult;
  }
};
