const knex = require("./postgresDb");

const run = async () => {
  const result = await knex.raw(`SELECT * from Customers;`);
  console.log("Result", result.rows);
  return true;
};

run().then((res) => {
  console.log("finish!!!!");
  process.exit(0);
});
