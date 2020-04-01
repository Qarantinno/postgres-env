'use strict'

const path = require('path')

global.APP_PATH = path.resolve(__dirname)
require('dotenv').config({
  path: path.join(APP_PATH + '/.env'),
})

const config = {
  db: require(APP_PATH + '/config/db.js')
}

const container = {}

const DBConnectionProvider = require(APP_PATH + '/lib/DBConnectionProvider')
const MigrationManager = require(APP_PATH + '/lib/MigrationManager')

container.dbConnectionProvider = new DBConnectionProvider(config)
container.migrationManager = new MigrationManager(container.dbConnectionProvider)

module.exports = {
  get: (name) => {
    return container[name] || (() => {
      throw new TypeError(`Unexpected item name!`)
    })()
  }
}
