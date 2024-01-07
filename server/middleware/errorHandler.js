class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = this.stateCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
