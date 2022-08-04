import { ResponseHandler } from '../handlers/ResponseHandler'
import { User } from '../models/User';
import { UserForm } from '../forms/UserForm';


export class UserController {

  static async all(request: Request, env: any) {
    try {
      const { DB } = env;
      const user = await User.all(DB)
      return ResponseHandler({data: user})
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }

  static async findby(request: Request, env: any) {
    try {
      const { DB } = env;
      const id = 'd00ab11b-e3dd-419b-8701-f9bf4893ea32';
      const user = await User.findBy('first_name', 'John', DB)
      return ResponseHandler({data: user})
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }

  static async delete(request: Request, env: any) {
    try {
      const { DB } = env;
      const id = 'd00ab11b-e3dd-419b-8701-f9bf4893ea32';
      const user = await User.delete('first_name', DB)
      return ResponseHandler({data: user})
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }

  static async find(request: Request, env: any) {
    try {
      const { DB } = env;
      const id = 'd00ab11b-e3dd-419b-8701-f9bf4893ea32';
      const user = await User.findById(id, DB)
      return ResponseHandler({data: user})
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }

  static async findone(request: Request, env: any) {
    try {
      const { DB } = env;
      const id = 'd00ab11b-e3dd-419b-8701-f9bf4893ea32';

      // findOne ( column, value, binding )
      const user = await User.findOne('first_name', 'John', DB)

      return ResponseHandler({data: user})
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }

  static async update(request: Request, env: any) {
    try {
      const { DB } = env;
      const id = 'd00ab11b-e3dd-419b-8701-f9bf4893ea32', first_name = 'John';

      const userForm = new UserForm(new User({ id, first_name}))
      const user = await User.update(userForm, DB)

      return ResponseHandler({data: user})
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }

  static async create(request: Request, env: any) {
    try {
      const { DB } = env;
      const first_name = 'John', last_name = 'Doe';

      const userForm = new UserForm(new User({ first_name, last_name }))
      const user = await User.create(userForm, DB)

      return ResponseHandler({data: user })
    } catch {
      return ResponseHandler({ message: 'something went wrong'})
    }
  }
}