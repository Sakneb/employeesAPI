const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;
const router = new KoaJoiRouter();

const tribesSchemas = require("./schemas/tribes-schemas");
const tribesController = require("../controllers/tribes-controller");

router.route({
  method: "GET",
  path: "/tribes",
  validate: {
    query: tribeschemas.getAllSchema,
  },
  handler: tribesController.getAll,
});

router.route({
  method: "POST",
  path: "/tribes",
  validate: {
    body: tribesSchemas.createSchema,
    type: "json",
  },
  handler: tribesController.create,
});

router.route({
  method: "GET",
  path: "/employees/tribe/:name",
  // validate: {},
  handler: tribesController.getByTribeName,
});

router.route({
  method: "GET",
  path: "/tribes/:id",
  validate: {
    params: tribeschemas.getByIdSchema,
  },
  handler: tribesController.getById,
});

router.route({
  method: "DELETE",
  path: "/tribes/:id",
  validate: {
    params: tribeschemas.deleteByIdSchema,
  },
  handler: tribesController.deleteById,
});

//router.get("/reports/employees", employeesController.employeesReport);
router.get("/tribes", tribesController.getTribes);
router.get("/tribes/:id", tribesController.getByIdTribes);
router.get("tribes/:id/employees", tribesController.getTribesById);

module.exports = router;
