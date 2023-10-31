#!/bin/bash

set -eo pipefail
shopt -s extglob

export PARENT_DIR

EXEC_PATH="${BASH_SOURCE[0]}"
[ -L "${BASH_SOURCE[0]}" ] && EXEC_PATH="$(readlink "${BASH_SOURCE[0]}")"
PARENT_DIR="$(dirname "${EXEC_PATH}")"
PARENT_DIR="$(cd "${PARENT_DIR}" && cd ../../ && pwd)"

rm -rf "${PARENT_DIR}/.zeabur/output"
mkdir -p "${PARENT_DIR}/.zeabur/output/functions/index.func"
cp -r "${PARENT_DIR}/dist/" "${PARENT_DIR}/.zeabur/output/functions/index.func/"
cp -r "${PARENT_DIR}/package.json" "${PARENT_DIR}/.zeabur/output/functions/index.func/"
cp -r "${PARENT_DIR}/infra/zeabur/index.js" "${PARENT_DIR}/.zeabur/output/functions/index.func/"
cp -r "${PARENT_DIR}/node_modules" "${PARENT_DIR}/.zeabur/output/functions/index.func/node_modules"
