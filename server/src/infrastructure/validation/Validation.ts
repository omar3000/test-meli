import { validationResult } from "express-validator";
export class Validation {
  static validate(req) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validationErrors = errors.array().map((error) => error.msg);
      return validationErrors;
    }
  }


}


