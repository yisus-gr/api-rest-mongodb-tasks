import {Router} from 'express';
const router = Router();

import * as taskCtrl from '../controllers/task.controller';

router.get('/', taskCtrl.findAllTasks);

router.post('/', taskCtrl.createTask);

router.get('/done', taskCtrl.findAllDoneTasks);

router.get('/:id', taskCtrl.findOneTask);

router.delete('/:id', taskCtrl.deleteTask);

router.put('/:id', taskCtrl.updateTask)


module.exports = router;