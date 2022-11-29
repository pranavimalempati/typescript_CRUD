import * as collegeController from '../controller/college_controller'
import * as express from 'express'
const router = express.Router()

router.post('/add',collegeController.addCollege)
router.get('/findall',collegeController.findall)
router.get('/findone',collegeController.findOne)
router.delete('/delete',collegeController.remove)
router.put('/update',collegeController.update)

export {router}