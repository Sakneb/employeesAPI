const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;

const createSchema = Joi.object({
  name: Joi.string().required(),
  area: Joi.string().required(),
});

const getAllSchema = Joi.object({
  name: Joi.string(),
  area: Joi.string(),
});

const getByIdSchema = Joi.object({
  id: Joi.number().required(),
});

const deleteByIdSchema = Joi.object({
  id: Joi.number().required(),
});

const getTribes = Joi.object({
  name: Joi.string(),
  area: Joi.string(),
});

const getByIdTribes = Joi.object({
  id: Joi.number().required(),
});

module.exports = {
  getAllSchema,
  createSchema,
  getByIdSchema,
  deleteByIdSchema,
  getTribes,
  getByIdTribes,
};
