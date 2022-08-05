const tribesModel = require("../models/tribes-model");
//const employeesModel = require("../models/employees-model-array");

async function create(ctx) {
  const tribe = ctx.request.body;
  await tribesModel.create(tribe);

  ctx.status = 201;
}

async function getAll(ctx) {
  const name = ctx.query.name;
  const area = ctx.query.area;

  console.log("tribes controller");

  ctx.status = 200;
  ctx.body = await tribesModel.getAll(name, area);
}

async function getById(ctx) {
  const id = ctx.params.id;
  const tribe = await tribesModel.getById(id);

  ctx.status = 200;
  ctx.body = tribe;
}

async function deleteById(ctx) {
  const id = ctx.params.id;

  await tribesModel.deleteById(id);

  ctx.status = 200;
  tribesModel.deleteById(id);
}

function tribesReport(ctx) {
  ctx.status = 200;
  ctx.body = tribesModel.tribesReport();
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  tribesReport,
};
