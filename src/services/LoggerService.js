import { format } from "date-fns";

export class LoggerService {
  static TRACE_PREFIX = "[TRACE]";
  static DEBUG_PREFIX = "[DEBUG]";
  static INFO_PREFIX = "[INFO]";
  static WARN_PREFIX = "[WARN]";
  static ERROR_PREFIX = "[ERROR]";

  static isEnabled(level) {
    return import.meta.env[`VITE_LOGLEVEL_${level.toUpperCase()}`] === "true";
  } 

  static log(level, prefix, message, ...args) {
    if (!this.isEnabled(level)) return;

    const time = format(new Date(), "HH:mm:ss.SSS");
    const logMessage = `${time} ${prefix} ${message}`;
    console[level.toLowerCase()](logMessage, ...args);
  }

  static trace(message, ...args) {
    this.log("trace", this.TRACE_PREFIX, message, ...args);
  }

  static debug(message, ...args) {
    this.log("debug", this.DEBUG_PREFIX, message, ...args);
  }

  static info(message, ...args) {
    this.log("info", this.INFO_PREFIX, message, ...args);
  }

  static warn(message, ...args) {
    this.log("warn", this.WARN_PREFIX, message, ...args);
  }

  static error(message, ...args) {
    this.log("error", this.ERROR_PREFIX, message, ...args);
  }
}
