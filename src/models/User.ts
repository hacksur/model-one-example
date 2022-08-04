import { Model, Schema } from 'model-one';
import type { SchemaConfigI } from 'model-one';
import { UserI, UserDataI } from '../interfaces/models'

export const userSchema: SchemaConfigI = new Schema({
  table_name: 'users',
  columns: [
    'id',
    'first_name',
    'last_name',
  ],
})

export class User extends Model implements UserI {
  data: UserDataI

  constructor(props: UserDataI) {
    super(userSchema, props)
    this.data = props
  }
}
