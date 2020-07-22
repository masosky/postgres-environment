const knex = require("./postgresDb");

const run = async () => {
  await knex.raw(`CREATE TABLE IF NOT EXISTS Customers (
        id serial primary key,
        name varchar(255)
    );`);
  await knex.raw(`CREATE TABLE IF NOT EXISTS Orders (
        id serial primary key,
        description varchar(255),
        created_at DATE,
        customer_id INTEGER
    );`);
  await knex.raw(`INSERT INTO Customers(id, name) VALUES (1, 'matet');`);
  await knex.raw(`INSERT INTO Customers(id, name) VALUES (2, 'teemo');`);
  await knex.raw(`INSERT INTO Customers(id, name) VALUES (3, 'ohh');`);
  await knex.raw(`INSERT INTO Customers(id, name) VALUES (4, 'twitch');`);
  await knex.raw(`INSERT INTO Customers(id, name) VALUES (5, 'feedktor');`);
  await knex.raw(`INSERT INTO Customers(id, name) VALUES (6, 'anivia');`);

  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (1, 'shit', '2013-06-01', 1);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (2, 'shit', '2013-06-02', 2);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (3, 'shit', '2013-06-03', 2);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (4, 'shit', '2013-06-04', 3);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (5, 'shit', '2013-06-05', 3);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (6, 'shit', '2013-06-06', 3);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (7, 'shit', '2013-06-07', 3);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (8, 'shit', '2013-06-08', 3);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (9, 'shit', '2013-06-09', 4);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (10, 'shit', '2013-06-10', 4);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (11, 'shit', '2013-06-11', 4);`
  );
  await knex.raw(
    `INSERT INTO Orders(id, description, created_at, customer_id) VALUES (12, 'shit', '2013-06-12', 4);`
  );
  return true;
};

run()
  .then((res) => {
    console.log("finish!!!!");
    process.exit(0);
  })

  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
