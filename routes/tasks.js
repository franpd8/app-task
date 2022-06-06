const express = require('express')
const TaskController = require('../controllers/TaskController')
const router = express.Router()

router.post('/add', TaskController.create)
router.get('/all', TaskController.getAll)

module.exports = router