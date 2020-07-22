const knex = require("./postgresDb");

const run = async () => {
  const result = await knex.raw(`SELECT * from Customers;`);
  console.log("Result", result);
};

run().then(console.log("finish!!!!"));
