const knex = require("knex");

const databaseUrl = "postgresql://postgres:password@localhost:5434/test";

const DB_SETTINGS = {
  client: "pg",
  connection: databaseUrl,
  debug: true,
  pool: { min: 2, max: 20 },
  /*migrations: {
    directory: "./src/migrations/app",
    tableName: "migrations"
  },
  seeds: {
    directory: "./src/migrations/app/seeds"
  },*/
};

module.exports = knex(DB_SETTINGS);
