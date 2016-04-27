var winston = require('winston'),
    path = require('path');

winston.transports.DailyRotateFile = require('winston-daily-rotate-file');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.DailyRotateFile({
            level: 'info',
            filename: path.join(__dirname, '../logs', 'dadi-express.log'),
            handleExceptions: true,
            json: true,
            maxsize: 5242880,
            maxfiles: 5,
            colorize: false,
            datePattern: '.dd-MM-yyyy'
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding) {
        logger.info(message.slice(0, -1));
    }
};
