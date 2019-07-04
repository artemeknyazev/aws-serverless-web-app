#!/usr/bin/env bash

set -eu -o pipefail;

CLIENT_S3_BUCKET_NAME="arkny-aws-serverless-web-app"
CLIENT_S3_BUCKET_REGION="us-east-2"

if [[ "${AWS_ACCESS_KEY_ID}" -eq "" ]] || [[ "${AWS_SECRET_ACCESS_KEY}" -eq "" ]]; then
  echo "deploy.sh: specify AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before running this script"
  exit 1
fi

cd "${BASH_SOURCE%/*}/../packages";

echo "Step: upload client to S3 bucket"

aws s3 cp \
	./client/build \
	s3://$CLIENT_S3_BUCKET_NAME \
	--grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
	--recursive \
	--region $CLIENT_S3_BUCKET_REGION

if [[ "$?" -ne "0" ]]; then
  echo "Error: failed to upload files"
  exit 1
fi
