import CryptoJS from 'react-native-crypto-js';


export const encryptString = (password, key) => {
  CryptoJS.AES.encrypt(value, encryptionKey).toString();
};


export const decryptString = (encryptedPassword, key) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, key);
  const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedPassword;
};