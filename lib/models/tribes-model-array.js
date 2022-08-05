const { default: knex } = require("knex");

const tribes = [
  { name: "Annabel Pugi", area: "Software engineer" },
  { name: "Egle Tannenberg", area: "Software engineer" },
  { name: "Gloria Krieger", area: "Software engineer" },
  { name: "Kristen Kuldmaa", area: "Software engineer" },
  { name: "Maksim Ramazanov", area: "Software engineer" },
  { name: "Rainar Razumovski", area: "Software engineer" },
  { name: "Risto Vatsar", area: "Software engineer" },
  { name: "Sakina Ibrahimova", area: "Software engineer" },
  { name: "Sazzad Hossain", area: "Software engineer" },
  { name: "Sirli Kont", area: "Software engineer" },
  { name: "Mike", area: "Backend developer" },
  { name: "Zohaib Ahmed Butt", area: "Frontend developer" },
  { name: "Tiina Härm", area: "Data Engineer" },
];

function create(tribe) {
  tribes.push(tribe);
}

async function getAll(name, area) {
  const query = knex(TABLE).select();
  if (name) query.whereILike("name", `${name}%`);
  if (area) query.where({ area });
  return await query;
  function getById(id) {
    return tribes[id];
  }
}

function deleteById(id) {
  tribes.splice(id, 1);
}

async function tribeReport() {
  const tribes = await knex(TABLE_NAME).select();
  const report = {};
  //   for (tribe of tribes) {
  //     if (employee.tribe in report) {
  //       report[employee.tribe].push({
  //         name: employee.name,
  //         title: employee.title,
  //       });
  //     } else {
  //       report[employee.tribe] = [];
  //       report[employee.tribe].push({
  //         name: employee.name,
  //         title: employee.title,
  //       });
  //     }
  //   }

  //   return report;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  tribeReport,
};
