import { Model } from 'objection'
import { Maybe } from '../__generated__/generated-types'
import Character from './Character'



class User extends Model{
    static tableName = 'users';
    id! : number;
    full_name!: Maybe<string>;
    created_at?:string;
    characters?: Character[];

    static jsonSchema = {
      type:'object',
      required:['full_name'],

      properties:{
        id: { type:'integer'},
        full_name:{type :'string', min:1, max :255},
        created_at:{type :'string', min:1, max :255}
      }
    }

    static relationMappings = () => ({
      characters: {
        relation: Model.HasManyRelation,
        modelClass: Character,
        join: {
          from: 'users.id',
          to: 'character.creator_id'
        }
      }
    })
}

export default User