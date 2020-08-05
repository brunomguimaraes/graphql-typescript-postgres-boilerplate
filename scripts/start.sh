#!/bin/bash

rm -rf ./dist

echo "Building..."
npm run build

npm run serve