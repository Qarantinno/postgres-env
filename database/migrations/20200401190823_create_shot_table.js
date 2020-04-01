exports.up = function (knex) {
  return knex.schema.createTable('shot', function (t) {

    t.bigIncrements('id').notNullable().primary()

    t.integer('week_day').notNullable().index()
    t.integer('people').notNullable()

    t.integer('place_id').notNullable().index()
    t.integer('place_modifier_id').notNullable().index()
    t.integer('source_id').notNullable().index()

    t.specificType('shooted_at', 'timestamp').notNullable().index()

    t.json('tracking_data')

    t.specificType('created_at', 'timestamp without time zone').notNullable()
    t.specificType('updated_at', 'timestamp without time zone')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('shot')
}
