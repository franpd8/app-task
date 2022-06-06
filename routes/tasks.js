const express = require('express')
const TaskController = require('../controllers/TaskController')
const router = express.Router()

router.post('/add', TaskController.create)
router.get('/all', TaskController.getAll)
router.get('/search/:_id', TaskController.getById)
router.put('/markAsCompleted/:_id', TaskController.markAsCompleted)
router.put('/update/:_id', TaskController.update)
router.delete('/delete/:_id', TaskController.delete)
module.exports = router