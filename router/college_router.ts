import * as collegeController from '../controller/college_controller'
import { Router } from 'express'
const router = Router()

router.post('/add',collegeController.addCollege)
router.get('/findall',collegeController.findall)
router.get('/findmany',collegeController.findmany)
router.get('/findone',collegeController.findOne)
router.delete('/delete',collegeController.remove)
router.put('/update',collegeController.update)
router.put('/updatemany',collegeController.updateall)
router.put('/update1',collegeController.update1)
router.delete('/deletemany',collegeController.removemany)
router.post('/substr',collegeController.substr)
router.post('/pagination',collegeController.pagination)

export {router}