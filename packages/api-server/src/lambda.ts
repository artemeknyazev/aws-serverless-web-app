import {
  IAWSAPIGatewayAWSProxyEvent,
  IAWSLambdaContext,
  IAWSAPIGatewayResponse
} from 'common/src/types/aws/lambda';

export async function handler(
  event: IAWSAPIGatewayAWSProxyEvent,
  context: IAWSLambdaContext
): Promise<IAWSAPIGatewayResponse> {
  console.log('path', event.path);
  console.log('body', event.body);
  return {
    statusCode: 200,
    body: 'Hello, World!'
  };
}
