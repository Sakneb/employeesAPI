const { knex } = require("../../db/knex");

const TABLE_NAME = "employees";
const EMPLOYEES_REPORT_CACHE_KEY = "employeesReport";

async function create(employee) {
  await knex(TABLE_NAME).insert(employee);
  await redis.del("EMPLOYEES_REPORT_CACHE_KEY;");
}

async function getAll(name, title, tribe) {
  console.log("employees-model getAll");
  const query = knex(TABLE_NAME).select();

  if (name) query.whereILike("name", `%${name}%`);

  if (tribe) {
    console.log("test");
    query
      .innerJoin("tribes", "employees.tribe_id", "tribes.id")
      .where("tribes.name", tribe);
  }
  return await query;
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteById(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
  await redis.del("EMPLOYEES_REPORT_CACHE_KEY;");
}

async function deleteCache() {
  await knex(TABLE_NAME).select().where({ id }).del();
  await redis.del("EMPLOYEES_REPORT_CACHE_KEY;");
}

async function getByTribeName(tribe_name) {}

function employeeReport() {
  throw "Not implemented";
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  employeeReport,
  deleteCache,
};
