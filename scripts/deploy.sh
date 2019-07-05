#!/usr/bin/env bash

set -eu -o pipefail;

# This script deploys the whole project. It assumes that
# all buckets/functions are present
#
# Requirements:
#   - Environment variables
#      - AWS_ACCESS_KEY_ID,
#      - AWS_SECRET_ACCESS_KEY - should be of the user
#        who is allowed write access to S3/Lambda/etc.
#

WEB_CLIENT_S3_BUCKET_NAME="arkny-aws-serverless-web-app"
WEB_CLIENT_S3_BUCKET_REGION="us-east-2"
RENDER_SERVER_FUNCTION_NAME="arkny-aws-serverless-web-app-render-server"
RENDER_SERVER_FUNCTION_REGION="us-east-2"

echo "AWS CLI located at `which aws`"
which aws # Will fail if aws command is not present

cd ${BASH_SOURCE%/*}/../packages;
PACKAGES_PATH=`pwd`

echo Deploying packages from $PACKAGES_PATH

echo
echo "--> Step: upload web client static files"
echo

aws s3 cp \
	./web-client/build/web-client \
	s3://$WEB_CLIENT_S3_BUCKET_NAME \
	--grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \
	--recursive \
	--region $WEB_CLIENT_S3_BUCKET_REGION

echo
echo "--> Step: deploy render server"
echo

cd $PACKAGES_PATH/web-client/build/render-server
zip -q lambda.zip lambda.js
aws lambda update-function-code \
  --function-name $RENDER_SERVER_FUNCTION_NAME \
  --zip-file fileb://lambda.zip \
  --region $RENDER_SERVER_FUNCTION_REGION
cd $PACKAGES_PATH
