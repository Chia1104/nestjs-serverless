#!/bin/bash

mkdir -p .zeabur/output/index.func && \
cp -r dist/ .zeabur/output/index.func/ && \
cp -r package.json .zeabur/output/index.func/ && \
mv .zeabur/output/index.func/lambda.js .zeabur/output/index.func/index.js