module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map((el) => el.join(""));
  while (str.length !== 0) {
    let length = str.length;
    for (let j = 0; j < bracketsConfig.length; j++) {
      str = str.replace(bracketsConfig[j], "");
    }
    if (length === str.length) {
      return false;
    }
  }
  return str.length === 0;
};