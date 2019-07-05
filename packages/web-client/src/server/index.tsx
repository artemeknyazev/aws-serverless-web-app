import * as React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import App from '../components/App';
import {
  IAWSAPIGatewayAWSProxyEvent,
  IAWSLambdaContext,
  IAWSAPIGatewayResponse
} from 'common/src/types/aws/lambda';

export async function handler(
  event: IAWSAPIGatewayAWSProxyEvent,
  context: IAWSLambdaContext
): Promise<IAWSAPIGatewayResponse> {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  console.log('path', event.path);
  console.log('body', event.body);

  // TODO: prepare with query params&hash
  const location = event.path;
  const staticRouterContext = {};
  const appHtml = renderToString(
    <StaticRouter location={location} context={staticRouterContext}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  const body = renderToStaticMarkup(
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <div id='root' dangerouslySetInnerHTML={{ __html: appHtml }} />
      </body>
    </html>
  );

  return {
    statusCode: 200,
    body
  };
}
