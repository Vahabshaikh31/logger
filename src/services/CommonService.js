import { LoggerWrapperService } from "./LoggerWrapperService";

export class CommonService {
  constructor() {
    this.logger = new LoggerWrapperService("CommonService");
  }

  isPositiveInteger(arg) {
    return /^\+?([1-9]\d*)$/.test(arg);
  }

  isWholeNumber(arg) {
    return /^\d+$/.test(arg);
  }

  isNumeric(arg) {
    this.logger.trace("isNumeric() called with arg", arg);
    const isValid = arg != null && !isNaN(arg);
    this.logger.trace("isNumeric() returning", isValid);
    return isValid;
  }

  getTimestamp(dateString) {
    return Date.parse(dateString);
  }

  eitherAllValidOrNone(...args) {
    const allValid = args.every((arg) => arg != null);
    const allInvalid = args.every((arg) => arg == null);
    return allValid || allInvalid;
  }

  allValid(...args) {
    return args.every((arg) => arg != null);
  }

  roundOff(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}
