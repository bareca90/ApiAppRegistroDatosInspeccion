import { Joi } from "express-validation";
import { IDataReference } from "../../interfaces/data.interaface";

export const insertDataValidationsRferences = {
  body: Joi.object<IDataReference>({
    reference: Joi.number()
      .required()
      .messages({
        "number.base": "Reference is required and must be a number.",
        "any.required": "Reference is required."
      }),
    releaseStartDate: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Release start date must be a string or null."
      }),
    releaseStartTime: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Release start time must be a string or null."
      }),
    releaseFinishDate: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Release finish date must be a string or null."
      }),
    releaseFinishTime: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Release finish time must be a string or null."
      }),
    sampleStartDate: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Sample start date must be a string or null."
      }),
    sampleStartTime: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Sample start time must be a string or null."
      }),
    sampleFinishDate: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Sample finish date must be a string or null."
      }),
    sampleFinishTime: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Sample finish time must be a string or null."
      }),
    stampedDate: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Stamped date must be a string or null."
      }),
    stampedTime: Joi.string()
      .allow(null)
      .messages({
        "string.base": "Stamped time must be a string or null."
      }),
    releaseTemperature: Joi.number()
      .allow(null)
      .messages({
        "number.base": "Release temperature must be a number or null."
      }),
    sampleTemperature: Joi.number()
      .allow(null)
      .messages({
        "number.base": "Sample temperature must be a number or null."
      }),
    stampedTemperature: Joi.number()
      .allow(null)
      .messages({
        "number.base": "Stamped temperature must be a number or null."
      }),
  }),
};