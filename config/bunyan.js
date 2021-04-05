const { stdSerializers, createLogger } = require('bunyan');
const path = require('path');

const logPath = (filename) => path.resolve(__dirname, '..', 'logs', filename);

const log = createLogger({
  name: 'bunyan-logging-example',
  level: 'info',
  hostname: process.env.HOSTNAME,
  serializers: {
    err: stdSerializers.err,
    req: stdSerializers.req,
    res: stdSerializers.res,
  },
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'error',
      stream: process.stderr,
    },
    {
      level: 'info',
      path: logPath('bunyan-combined.log'),
    },
    {
      level: 'error',
      path: logPath('bunyan-error.log'),
    },
  ],
});

module.exports = log;
