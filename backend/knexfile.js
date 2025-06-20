require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/fan_meet_greet',
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  test: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/fan_meet_greet_test',
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds/test'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds/production'
    },
    pool: {
      min: 2,
      max: 20
    }
  }
};