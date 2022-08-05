const { knex } = require("../../db/knex");

const TABLE_NAME = "tribes";

async function create(employee) {
  await knex(TABLE_NAME).insert(employee);
}

async function getAll(name, area) {
  console.log("tribes-model getAll");
  const query = knex(TABLE_NAME).select();

  if (name) query.whereILike("name", `%${name}%`);

  return await query;
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteById(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

async function getByTribeName(tribe_name) {}

function tribeReport() {
  throw "Not implemented";
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  getByTribeName,
  tribeReport,
};
