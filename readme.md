# Local Postgres environment

## Required
* docker
* docker-compose
* node, npm the latest LTS will be fine

## Setting Up
* clone
* `cp .env-example .env`
* `cd docker-env`
* `cp .env-example .env` yes, again but  for docker-compose
* `docker-compose up -d --build postgres`
* `cd ..`
* `npm ci`
* `npx knex migrate:latest`

It'll be accessible on localhost, port 5432\
the creads are in `.env`

If yo want, you can connect your own container to the network.
* Add a dir with build to `./docker-env`
* Add it to `docker-compose.yml`
* Add the common network to your container `backend`
* the postgres will be able on the domain of `postgres` from the inside of your container

## Starting / Stopping
* `cd docker-env`
* start `docker-compose up -d postgres`
* down `docker-compose down`

