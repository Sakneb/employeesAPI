const { default: knex } = require("knex");
const redis = require("../../redis/redis");

const employees = [
  { name: "Annabel Pugi", title: "Intern", tribe: "Internstellar" },
  { name: "Egle Tannenberg", title: "Intern", tribe: "Internstellar" },
  { name: "Gloria Krieger", title: "Intern", tribe: "Internstellar" },
  { name: "Kristen Kuldmaa", title: "Intern", tribe: "Internstellar" },
  { name: "Maksim Ramazanov", title: "Intern", tribe: "Internstellar" },
  { name: "Rainar Razumovski", title: "Intern", tribe: "Internstellar" },
  { name: "Risto Vatsar", title: "Intern", tribe: "Internstellar" },
  { name: "Sakina Ibrahimova", title: "Intern", tribe: "Internstellar" },
  { name: "Sazzad Hossain", title: "Intern", tribe: "Internstellar" },
  { name: "Sirli Kont", title: "Intern", tribe: "Internstellar" },
  { name: "Mike", title: "Backend Developer", tribe: "Internstellar" },
  { name: "Zohaib Ahmed Butt", title: "Full Stack Developer", tribe: "Rigas" },
  { name: "Tiina Härm", title: "Senior Data Engineer", tribe: "Data" },
];

function create(employee) {
  employees.push(employee);
}

async function getAll(name, title, tribe) {
  const query = knex(TABLE).select();
  if (name) query.whereILike("name", `${name}%`);
  if (title) query.where({ title });
  if (tribe) query.where({ tribe });
  return await query;
  function getById(id) {
    return employees[id];
  }
}

function deleteById(id) {
  employees.splice(id, 1);
}

async function employeeReport() {
  const cache = redis.get("employeesReport");
  if (cache) {
    return JSON.parse(cache);
  }

  const employees = await knex(TABLE_NAME).select();
  const report = {};
  for (employee of employees) {
    if (employee.tribe in report) {
      report[employee.tribe].push({
        name: employee.name,
        title: employee.title,
      });
    } else {
      report[employee.tribe] = [];
      report[employee.tribe].push({
        name: employee.name,
        title: employee.title,
      });
    }
  }
  redis.set("employeesReport", JSON.stringify(report));
  return report;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  employeeReport,
};
