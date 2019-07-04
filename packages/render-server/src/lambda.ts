import {
  IAWSAPIGatewayAWSProxyEvent,
  IAWSLambdaContext
} from './types/aws-lambda';

export async function handler(
  event: IAWSAPIGatewayAWSProxyEvent,
  context: IAWSLambdaContext
) {
  console.log('path', event.path);
  console.log('body', event.body);
  return {
    statusCode: 200,
    body: 'Hello, World!'
  };
}
