exports.up = function (knex) {
  return knex.raw(`
  create function update_modified_at() returns trigger
      language plpgsql
      as $$
  begin
      new.modified_at := current_timestamp;
      RETURN new;
  end;
  $$;
  
  create table if not exists places (
      id serial,
      type varchar(20) not null,
      modifier varchar(20) not null,
      primary key (id)
  );
  create index places_name_idx on places (type);
  create index places_modifier_idx on places (modifier);
  
  create table if not exists shots (
      id serial,
      week_day varchar(3) not null,
      people int not null,
      source varchar(20) not null,
      tracking_data jsonb null,
      shot_at timestamp not null,
      place_id int not null,
      modified_at timestamp not null default current_timestamp,
      created_at timestamp not null default current_timestamp,
      primary key (id),
      foreign key (place_id) references places (id)
  );
  create index shots_week_day_idx on shots (week_day);
  CREATE TRIGGER trigger_update_shots_modified_at
      BEFORE UPDATE ON shots
      FOR EACH ROW
  EXECUTE PROCEDURE update_modified_at();
  `)
}

exports.down = function (knex) {

  return knex.schema.dropTable('shots')
    .then(() => {
      return knex.schema.dropTable('places')
    })
    .then(() => {
      return knex.raw(`
      drop function update_modified_at()
      `)
    })

}
