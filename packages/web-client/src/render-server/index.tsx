import * as React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet, { HelmetData } from 'react-helmet';
import App from '../components/App';
import {
  IAWSAPIGatewayAWSProxyEvent,
  IAWSLambdaContext,
  IAWSAPIGatewayResponse
} from 'common/src/types/aws/lambda';
import config from '../config/render-server';

function renderAppHtml(location: string, context: any): string {
  return renderToString(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  );
}

function renderPageHtml(
  appHtml: string,
  helmet: HelmetData,
  publicHtml: string
): string {
  return renderToStaticMarkup(
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        <link
          rel='icon'
          href={publicHtml + '/static/favicon.ico'}
          type='image/x-icon'
        />
        <script
          src={publicHtml + '/static/bundle.js'}
          type='text/javascript'
          async
        />
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <div id='root' dangerouslySetInnerHTML={{ __html: appHtml }} />
      </body>
    </html>
  );
}

export async function handler(
  event: IAWSAPIGatewayAWSProxyEvent,
  context: IAWSLambdaContext
): Promise<IAWSAPIGatewayResponse> {
  console.log('request', {
    path: event.path,
    httpMethod: event.httpMethod,
    headers: event.headers,
    queryStringParameters: event.queryStringParameters,
    pathParameters: event.pathParameters
  });

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  // TODO: prepare with query params&hash
  const location = event.path;
  const routerContext: any = {};
  const appHtml = renderAppHtml(location, routerContext);

  if (routerContext.url) {
    // TODO: configure response status code in component
    return {
      statusCode: 301,
      headers: {
        Location: routerContext.url
      }
    };
  }

  const pageHtml = renderPageHtml(
    appHtml,
    Helmet.renderStatic(),
    config.publicHtml
  );

  return {
    statusCode: 200,
    body: pageHtml
  };
}
