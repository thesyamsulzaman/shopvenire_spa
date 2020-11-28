// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "syamsulzaman",
      database: "shopvenire"
    },
    migrations: {
      directory: __dirname + "../database/migrations"
    },
    seeds: {
      directory: __dirname + "../database/seeds"
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
