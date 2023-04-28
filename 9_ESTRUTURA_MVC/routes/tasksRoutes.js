const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask);
router.get('/edit/:id', TaskController.editTask);

router.post('/add', TaskController.createTaskSave);
router.post('/edit/:id', TaskController.editTaskSave);
router.post('/remove/:id', TaskController.removeTask);
router.post('/complete/:id', TaskController.completeTask);

router.get('/', TaskController.showTasks);
router.get('/:id', TaskController.showTaskById);

module.exports = router;
