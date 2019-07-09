import convict from 'convict';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

dotenvExpand(dotenv.config());

const config = convict({
  env: {
    doc: 'Application environment',
    default: 'development',
    env: 'NODE_ENV',
    format: String
  },
  publicHtml: {
    doc: 'Static files location',
    default: '',
    env: 'APP_PUBLIC_HTML',
    format: String
  },
  basename: {
    doc: 'Router basename',
    default: '',
    env: 'APP_ROUTER_BASENAME',
    format: String
  }
});

config.validate({ allowed: 'strict' });

export default config.getProperties();
