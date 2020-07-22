const knex = require("./postgresDb");

const run = async () => {
  const result = await knex.raw(`SELECT name, order_id, order_created_at
  FROM (SELECT id as order_id, created_at as order_created_at, customer_id
   FROM
   (SELECT orders.*, 
     rank() OVER (PARTITION BY customer_id ORDER BY created_at DESC) as rank
     FROM orders) ranked_orders
   WHERE ranked_orders.rank <=3) top_orders
  JOIN customers on customers.id = top_orders.customer_id`);
  console.log("Result", result.rows);
  return true;
};

run().then((res) => {
  console.log("finish!!!!");
  process.exit(0);
});
