require('dotenv').config({path: '../.env'})

const default_config = {
  client: 'pg',
  connection: {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  },
  timezone: 'UTC'
}

interface KnexConfig {
  [key: string]: object;
}
const config: KnexConfig = {
  development: {
    ...default_config
  },
  testing: {
    ...default_config
  },
  production: {
    ...default_config
  }
}

export default config