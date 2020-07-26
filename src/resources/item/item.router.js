import { Router } from 'express'
import { itemController } from './item.controllers'

const router = Router()

// this is mounted on (/api/items) and then relative path
// router.get('/', itemController)
// router.post('/', itemController)

// this is mounted on (/api/items) and then relative path
// router.get('/:id', itemController)
// router.put('/:id', itemController)
// router.delete(':/id', itemController)

router.route('/')
        .get(itemController)
        .post(itemController)

router.route('/:id')
        .get(itemController)
        .put(itemController)
        .delete(itemController)



export default router
