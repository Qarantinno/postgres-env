'use strict'

const app = require('./bootstrap')

/**
 * @type {MigrationManager}
 */
const migrationsManager = app.get('migrationManager')

const knexConfig = migrationsManager.getMigrationConfig()

module.exports = knexConfig
