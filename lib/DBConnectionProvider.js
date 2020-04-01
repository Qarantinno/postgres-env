'use strict'

const knex = require('knex')

/**
 * Provides DB connections
 */
class DBConnectionProvider {
  /**
   * @param {{db: {main: {}}}} config
   */
  constructor(config) {
    /**
     * @type {{db: {main: {}}}}
     * @private
     */
    this._config = config
  }

  /**
   * Connection accessor
   * @return {QueryInterface}
   */
  getMainConnection() {
    //todo: add NODE_ENV dep
    return knex(this._config.db.main)
  }

  /**
   * Main connection config accessor
   * @return {{}}
   */
  getMainConnectionConfig() {
    //todo: add NODE_ENV dep
    return this._config.db.main
  }
}

module.exports = DBConnectionProvider
