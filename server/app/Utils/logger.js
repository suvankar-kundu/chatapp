/**
 * Configurations of logger.
 */
const winston = require('winston');
const env = process.env.NODE_ENV || 'local';
const fs = require('fs');
var util = require('util');
var path = require('path');
var PROJECT_ROOT = path.join(__dirname, '..');
const logDir = 'logs';
var loglevels = {};
loglevels["error"] = 0;
loglevels["info"] = 1;
loglevels["debug"] = 2;
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const successLogger = new(winston.Logger)({
  transports: [
    // colorize the output to the console
    new(winston.transports.Console)({
      colorize: true,
      level: "info"
    }),
    new(require('winston-daily-rotate-file'))({
      filename: `${logDir}/-results.log`,
      datePattern: 'dd-MM-yyyy',
      prepend: true,
      level: "info",
      timestamp: function () {
        return getDateTime();
      }
    })
  ]
});
const performLogger = new(winston.Logger)({
  transports: [
    // colorize the output to the console
    new(winston.transports.Console)({
      colorize: true,
      level: "debug"
    }),
    new(require('winston-daily-rotate-file'))({
      filename: `${logDir}/-perform.log`,
      datePattern: 'dd-MM-yyyy',
      prepend: true,
      level: "debug",
      timestamp: function () {
        return getDateTime();
      }
    })
  ]
});

const errorLogger = new(winston.Logger)({
  transports: [
    // colorize the output to the console
    new(winston.transports.Console)({
      colorize: true,
      level: "error"
    }),
    new(require('winston-daily-rotate-file'))({
      filename: `${logDir}/-error.log`,
      datePattern: 'dd-MM-yyyy',
      prepend: true,
      level: "error",
      timestamp: function () {
        return getDateTime();
      }
    })
  ]
});

if (env === "production") {
  errorLogger.remove(winston.transports.Console);
  successLogger.remove(winston.transports.Console);
}

function getDateTime() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/" +
    (currentdate.getMonth() + 1) + "/" +
    currentdate.getFullYear() + " " +
    currentdate.getHours() + ":" +
    currentdate.getMinutes() + ":" +
    currentdate.getSeconds();
  return datetime;
}

function formatArgs(args) {
  args = Array.prototype.slice.call(args)

  var stackInfo = getStackInfo(1)
  if (stackInfo) {
    // get file path relative to project root
    var calleeStr = '(' + stackInfo.relativePath + ':' + stackInfo.line + ')'

    if (typeof (args[0]) === 'string') {
      args[0] = calleeStr + ' ' + args[0]
    } else {
      args.unshift(calleeStr)
    }
  }

  // return args;
  return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.log = function () {
  if (1 <= loglevels[process.env.LOG_LEVEL]) {
    successLogger.info.apply(successLogger, formatArgs(arguments));
  }
};
console.info = function () {
  if (1 <= loglevels[process.env.LOG_LEVEL]) {
    successLogger.info.apply(successLogger, formatArgs(arguments));
  }
};
console.debug = function () {
  if (2 <= loglevels[process.env.LOG_LEVEL]) {
    successLogger.info.apply(successLogger, formatArgs(arguments));
  }
};
console.time = function () {
    performLogger.debug.apply(performLogger, formatArgs(arguments));
};
console.error = function () {
  if (0 <= loglevels[process.env.LOG_LEVEL]) {
    errorLogger.error.apply(errorLogger, formatArgs(arguments));
  }
};
/**
 * Parses and returns info about the call stack at the given index.
 */
function getStackInfo(stackIndex) {
  // get call stack, and analyze it
  // get all file, method, and line numbers
  var stacklist = (new Error()).stack.split('\n').slice(3)

  // stack trace format:
  // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
  // do not remove the regex expresses to outside of this method (due to a BUG in node.js)
  var stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi
  var stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi

  var s = stacklist[stackIndex] || stacklist[0]
  var sp = stackReg.exec(s) || stackReg2.exec(s)

  if (sp && sp.length === 5) {
    return {
      method: sp[1],
      relativePath: path.relative(PROJECT_ROOT, sp[2]),
      line: sp[3],
      pos: sp[4],
      file: path.basename(sp[2]),
      stack: stacklist.join('\n')
    }
  }
}

module.exports = {
  'successlog': successLogger,
  'errorlog': errorLogger,
  'performlog': performLogger
};