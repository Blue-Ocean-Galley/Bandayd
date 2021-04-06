const path = require('path');
const {
  createLogger,
  format,
  transports,
} = require('winston');

const {
  combine,
  timestamp,
  colorize,
  simple,
} = format;

const logPath = (filename) => path.resolve(__dirname, '..', 'logs', filename);
const logger = createLogger({
  level: 'info',
  defaultMeta: { service: 'bandayd' },
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        timestamp(),
        simple(),
      ),
    }),
    new transports.File({
      level: 'error',
      filename: logPath('error.log'),
      format: combine(
        timestamp(),
        simple(),
      ),
    }),
    new transports.File({
      level: 'info',
      filename: logPath('combined.log'),
      format: combine(
        timestamp(),
        simple(),
      ),
    }),
  ],
});

module.exports = logger;
