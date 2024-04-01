import CryptoJS from "react-native-crypto-js";

export const encryptString = (plainText) => {
  var encryptedData = CryptoJS.AES.encrypt(plainText, process.env.DECRYPTION_KEY).toString();

  return encryptedData;
}

export const decryptString = (encryptedString) => {

  var bytes  = CryptoJS.AES.decrypt(encryptedString, process.env.DECRYPTION_KEY);
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
}

