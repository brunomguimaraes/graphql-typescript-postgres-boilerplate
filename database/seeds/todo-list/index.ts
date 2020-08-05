var fs = require('fs');
var { db } = require('../../seeds/db/index.ts');
const data = require('../../seeds/todo-list/data.json');

const todoListItems = [];

const query = 'INSERT INTO todo_list(content) VALUES($1) RETURNING *';

data.map(function(item) {
  const value = [item.content];

  db.query(query, value, function(err, result) {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(result.rows[0]);
    }
  });
});
