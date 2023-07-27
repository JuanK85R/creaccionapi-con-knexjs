// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'containers-us-west-202.railway.app',
      port: 7130,
      database: 'knex-ejercicio',
      user: 'postgres',
      password: 'htoI2VO1WZVVzVDdB2sh'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      host: 'containers-us-west-202.railway.app',
      port: 7130,
      database: 'knex-ejercicio',
      user: 'postgres',
      password: 'htoI2VO1WZVVzVDdB2sh'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'containers-us-west-202.railway.app',
      port: 7130,
      database: 'knex-ejercicio',
      user: 'postgres',
      password: 'htoI2VO1WZVVzVDdB2sh'
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
