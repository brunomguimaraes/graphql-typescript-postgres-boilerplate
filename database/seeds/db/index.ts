const { connect } = require('../../../database/seeds/db/connect');
const pool = connect();

const database = {
  query: function(text, params, callback) {
    return pool.query(text, params, callback);
  },
};

module.exports = {
  database,
};
