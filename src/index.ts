import express, { Application } from 'express'
import {  ApolloServer , Config } from 'apollo-server-express'
import schema from './schema'
import Knex from 'knex'
import{ Model } from 'objection'
import dbconfig from './db_config'
const db = Knex(dbconfig['development'])

Model.knex(db)

const app: Application  = express()

const config : Config = {
  schema:schema,
  introspection: true,
  playground: true,

}

const server : ApolloServer = new ApolloServer(config)

server.applyMiddleware({
  app,
  path: '/graphql'
})

app.listen(4000,()=>{
  console.log('We are running on http://localhost:4000/graphql')
})