#!/usr/bin/env bash

set -eu -o pipefail;

if [[ "$#" == "0" ]]; then
  echo "npm-for-each: pass one or more arguments";
  exit 1;
fi;

cd "${BASH_SOURCE%/*}/../packages";
readonly PACKAGES_DIR=`pwd`;
readonly PACKAGES=(`ls -d *`);

EXIT_CODE=0
for pkg in "${PACKAGES[@]}"; do
  if [[ -f "$PACKAGES_DIR/$pkg/package.json" ]]; then
    echo "[packages/$pkg]: running 'npm $@'"
    cd "$PACKAGES_DIR/$pkg";
    npm $@;
    if [[ "$?" -ne "0" ]]; then
      EXIT_CODE=1
    fi
  fi
done;

exit ${EXIT_CODE}
