'use strict'

module.exports = {
  main: {
    client: 'pg',
    connection: {
      host: process.env.MAIN_DB_HOST,
      port: process.env.MAIN_DB_PORT,
      user: process.env.MAIN_DB_USER,
      password: process.env.MAIN_DB_PASSWORD,
      database: process.env.MAIN_DB_NAME,
      ssl: process.env.MAIN_DB_SSL === 'true'
    },
    migrations: {
      tableName: 'migrations'
    },
    log: {
      warn(message) {
        console.warn(message)
      },
      error(message) {
        console.error(message)
      },
      deprecate(message) {
        console.warn(message)
      },
      debug(message) {
        console.warn(message)
      },
    }
  }
}
