import { Model } from 'objection'
import { CharacterType, Maybe } from '../__generated__/generated-types'

import User from './User'

class Character extends Model {
    static tableName = 'characters';
    id!: number;
    name?: Maybe<string>;
    character_type?: Maybe<CharacterType>;
    created_at?: string;
    creator_id!: number;
    creator?: User;

    static jsonSchema = {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', min: 1, max: 255 },
        type: { type: 'string', min: 1, max: 255 },
        created_at: { type: 'string', min: 1, max: 255 }
      }
    };

    static relationMappings = () => ({
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'character.creator_id',
          to: 'users.id',
        }
      }
    });


}

export default Character