import { Resolvers } from '../__generated__/generated-types'
import { User, Character } from '../models'
import { UserInputError } from 'apollo-server-express'

interface assertion {
    [key: string]:string | number ;
}

type StringIndexed<T> = T & assertion;

const resolvers : Resolvers ={
  Query:{
    users: async (parent,args,ctx)=>{
      const users : User[] = await User.query()
      return users
    },
    user:async (parent,args,ctx)=>{
      const user: User = await await User.query().findById(args.id)

      return user
    },
  },
  User:{
    characters:async (parent,args,ctx)=>{
      const characters : Character[] = await User.relatedQuery('characters').for(parent.id)

      return characters
    }
        
  },
  Mutation:{
    createUser:async (parent,args,ctx)=>{
      let user : User
      try {
        user = await User.query().insert({...args.user})
      } catch (error) {
        console.log(error)
        throw new UserInputError('Error!', {
          invalidArgs: Object.keys(args),
        })
      }
      return user
    },
    updateUser:async (parent,{user:{id,...data}},ctx)=>{

      const user : User = await User.query().patchAndFetchById(id,data)

      return user

    },
    deleteUser:async (parent,args,ctx)=>{
      const deleted = await User.query().deleteById(args.id)
      return 'Succesfull deleted'
    },

  }
}


export default resolvers