import { Router } from 'itty-router'
import { UserController } from './controllers/UserController';
const router = Router()

router
  .get('/all', UserController.all)
  .get('/new', UserController.create)
  .get('/find', UserController.find)
  .get('/update', UserController.update)
  .get('/find_by', UserController.findby)
  .get('/find_one', UserController.findone)
  .get('/delete', UserController.delete)

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default router; 