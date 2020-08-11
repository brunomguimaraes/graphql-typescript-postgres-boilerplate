
import { User, Character } from '../models'
import { Resolvers } from '../__generated__/generated-types'
import { UserInputError } from 'apollo-server-express'


const resolvers : Resolvers = {
  Query:{
    character: async ( parent, args, ctx ) => {
      const character: Character = await Character.query().findById(args.id)

      return character          
    },
    characters: async ( parent, args, ctx ) => {
      const characters: Character[] = await Character.query()

      return characters

    }
  },
  Character: {
    creator: async(parent,args,ctx)=>{
      const creator : User = await Character.relatedQuery('creator').for(parent.id).first()

      return creator
    }
  },
  Mutation:{
    createCharacter:async (parent,args,ctx)=>{
      let character: Character
      try {
        character  = await Character.query().insert({...args.character})
               
      } catch (error) {
        throw new UserInputError('Bad user input fields required',{
          invalidArgs: Object.keys(args),
        })
                
      }
      return character
    },
    updateCharacter:async (parent,{character:{id,...data}},ctx)=>{
      const character : Character = await Character.query()
        .patchAndFetchById(id,data)

      return character
    },
    deleteCharacter:async (parent,args,ctx)=>{
      const character = await Character.query().deleteById(args.id)
      return 'Successfully deleted'
    },
  }
}


export default resolvers