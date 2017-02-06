var _ = require('lodash');

var localEnvVars = {
  TITLE:      "a1_api",
  SAFE_TITLE: 'a1_api'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
