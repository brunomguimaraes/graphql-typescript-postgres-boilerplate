import { makeExecutableSchema } from 'graphql-tools'
import schema from './graphql/schema.gql'
import { user, character } from '../resolvers'

const resolvers = [user, character]

export default makeExecutableSchema({typeDefs:schema, resolvers: resolvers as any})