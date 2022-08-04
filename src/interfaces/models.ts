import { Model } from 'model-one'

export interface UserDataI {
  id?: string
  first_name?: string
  last_name?: string
}

export interface UserI extends Model {
  data: UserDataI
}
