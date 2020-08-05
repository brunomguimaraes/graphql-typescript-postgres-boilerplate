const { connect } = require('../../seeds/db/connect.ts');
const pool = connect();

const db = {
  query: function(text, params, callback) {
    return pool.query(text, params, callback);
  },
};

module.exports = {
  db,
};
