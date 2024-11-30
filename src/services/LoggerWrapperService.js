import { LoggerService } from "./LoggerService";

export class LoggerWrapperService {
  constructor(instance) {
    this.instance = instance;
  }

  log(level, ...args) {
    LoggerService[level](`[${this.instance}]`, ...args);
  }

  trace(...args) {
    this.log("trace", ...args);
  }

  debug(...args) {
    this.log("debug", ...args);
  }

  info(...args) {
    this.log("info", ...args);
  }

  warn(...args) {
    this.log("warn", ...args);
  }

  error(...args) {
    this.log("error", ...args);
  }
}
