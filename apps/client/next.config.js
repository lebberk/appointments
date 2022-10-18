/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true
});
