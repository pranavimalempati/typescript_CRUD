import * as collegeController from '../controller/college_controller'
import * as express from 'express'
const router = express.Router()

router.post('/add',collegeController.addCollege)
router.get('/findall',collegeController.findall)
router.get('/findone/:name',collegeController.findOne)
router.post('/delete',collegeController.remove)
router.post('/update/:name',collegeController.update)

export {router}