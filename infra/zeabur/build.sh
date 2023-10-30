#!/bin/bash

mkdir -p .zeabur/output/functions/index.func && \
cp -r dist/ .zeabur/output/functions/index.func/ && \
cp -r package.json .zeabur/output/functions/index.func/ && \
mv .zeabur/output/functions/index.func/lambda.js .zeabur/output/functions/index.func/index.js