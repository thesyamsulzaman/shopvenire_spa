const enviroment = require("../database/knexfile");
const db = require("knex")(enviroment.development);

exports.getAllProducts = (req, res, next) => {
  console.log(req.body);
  res.json([
    {
      title: "Title One",
      body: "Body One"
    },
    {
      title: "Title Two",
      body: "Body Two"
    }
  ]);
};
