import * as collegeController from '../controller/college_controller'
import * as express from 'express'
const router = express.Router()

router.post('/add',collegeController.addCollege)
router.get('/findall',collegeController.findall)
router.get('/findone',collegeController.findOne)
router.delete('/delete',collegeController.remove)
router.put('/update',collegeController.update)
router.put('/updatemany',collegeController.updateall)
router.put('/update1',collegeController.update1)
router.delete('/deletemany',collegeController.removemany)


export {router}