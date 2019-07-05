export interface IAWSAPIGatewayAWSProxyEvent<TBody = any> {
  /**
   * Request body
   */
  body: TBody;

  /**
   * E.g. "/{proxy+}"
   */
  resource: string;

  /**
   * E.g. "/path/to/resource"
   */
  path: string;

  /**
   * E.g. "POST"
   */
  httpMethod: string;

  isBase64Encoded: boolean;

  queryStringParameters: {
    [queryParam: string]: string;
  };

  pathParameters: {
    [pathParam: string]: string;
  };

  stageVariables: {
    [stageVariable: string]: string;
  };

  headers: {
    [header: string]: string;
  };

  requestContext: {
    /**
     * E.g. "123456789012"
     */
    accountId: string;

    /**
     * E.g. "123456"
     */
    resourceId: string;

    /**
     * E.g. "prod"
     */
    stage: string;

    /**
     * E.g. "c6af9ac6-7b61-11e6-9a41-93e8deadbeef"
     */
    requestId: string;

    /**
     * E.g. "09/Apr/2015:12:34:56 +0000"
     */
    requestTime: string;

    /**
     * E.g. 1428582896000
     */
    requestTimeEpoch: number;

    identity: {
      cognitoIdentityPoolId: string;

      accountId: string;

      cognitoIdentityId: string;

      caller: string;

      accessKey: string;

      /**
       * E.g. "127.0.0.1"
       */
      sourceIp: string;

      cognitoAuthenticationType: string;

      cognitoAuthenticationProvider: string;

      userArn: string;

      /**
       * E.g. "Custom User Agent String"
       */
      userAgent: string;

      user: string;
    };

    /**
     * E.g. "/prod/path/to/resource"
     */
    path: string;

    /**
     * E.g. "/{proxy+}"
     */
    resourcePath: string;

    /**
     * E.g. "POST"
     */
    httpMethod: string;

    /**
     * E.g. "1234567890"
     */
    apiId: string;

    /**
     * E.g. "HTTP/1.1"
     */
    protocol: string;
  };
}

export interface IAWSLambdaContext {
  /**
   * Returns the number of milliseconds left before the execution times out
   */
  getRemainingTimeInMillis(): number;

  /**
   * The name of the Lambda function.
   */
  functionName: string;

  /**
   * The version of the function.
   */
  functionVersion: string;

  /**
   * The Amazon Resource Name (ARN) that's used to invoke the function.
   * Indicates if the invoker specified a version number or alias.
   */
  invokedFunctionArn: string;

  /**
   * The amount of memory that's allocated for the function.
   */
  memoryLimitInMB: string;

  /**
   * The identifier of the invocation request.
   */
  awsRequestId: string;

  /**
   * The log group for the function.
   */
  logGroupName: string;

  /**
   * The log stream for the function instance.
   */
  logStreamName: string;

  /**
   * (mobile apps) Information about the Amazon Cognito identity that authorized
   * the request.
   */
  identity?: {
    /**
     * The authenticated Amazon Cognito identity.
     */
    cognitoIdentityId: string;

    /**
     * The Amazon Cognito identity pool that authorized the invocation.
     */
    cognitoIdentityPoolId: string;
  };

  /**
   * (mobile apps) Client context that's provided to Lambda by the client
   * application.
   */
  clientContext?: {
    client: {
      installation_id: string;

      app_version_name: string;

      app_version_code: string;

      app_package_name: string;
    };

    env: {
      platform_version: string;

      platform: string;

      make: string;

      model: string;

      locale: string;
    };
  };

  /**
   * Set to false to send the response right away when the callback executes,
   * instead of waiting for the Node.js event loop to be empty. If this is
   * false, any outstanding events continue to run during the next invocation.
   */
  callbackWaitsForEmptyEventLoop: boolean;
}

export interface IAWSAPIGatewayResponse {
  /**
   * HTTP response status code. E.g. 200
   */
  statusCode?: number;

  /**
   * HTTP response body
   */
  body?: string;

  /**
   * HTTP response headers
   */
  headers?: {
    [header: string]: string;
  };
}
