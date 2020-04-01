'use strict'

const knex  = require('knex')

/**
 * Handle migrations
 */
class MigrationManager {
  /**
   * @param {DBConnectionProvider} dbConnectionProvider
   */
  constructor(dbConnectionProvider) {
    const migrationsConfig = dbConnectionProvider.getMainConnectionConfig()

    if(!migrationsConfig.migrations) {
      migrationsConfig.migrations = {}
    }

    if(!migrationsConfig.migrations.tableName) {
      migrationsConfig.migrations.tableName = 'migrations'
    }

    if(!migrationsConfig.migrations.directory) {
      migrationsConfig.migrations.directory = APP_PATH + '/database/migrations'
    }

    /**
     * {{}}
     * @private
     */
    this._migrationsConfig = { [process.env.NODE_ENV]: migrationsConfig }

    /**
     * @type {QueryInterface}
     * @private
     */
    this._mainConnection = knex(migrationsConfig)
  }

  /**
   * @return {{}}
   */
  getMigrationConfig() {
    return this._migrationsConfig
  }
}

module.exports = MigrationManager
