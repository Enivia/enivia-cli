const { v4: uuidv4 } = require("uuid");

module.exports = function uuid(options) {
  const id = uuidv4();
  const pure = options && options.pure;
  console.log(pure ? id.replace(/-/g, "") : id);
};
