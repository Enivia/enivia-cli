const chalk = require("chalk");
const getQrcode = require("qrcode");

module.exports = function qrcode(content) {
  getQrcode.toString(content, (err, res) => {
    if (err) {
      console.log(`Generate qrcode error: ${chalk.red(err)}.`);
      return;
    }
    console.log(res);
  });
};
