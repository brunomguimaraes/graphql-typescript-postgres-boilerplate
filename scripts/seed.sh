#!/bin/bash

echo "Filling data to `todo_list` table"
node ./database/seeds/todo-list/index.ts
