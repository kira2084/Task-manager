//const Task=require('../models/Task')
const express=require('express');
const  router=express.Router();
const {gettask,
    createtask,
    getid,
    updatetask,
    deletetask}=require('../controller/task-controller')

router.route('/').get(gettask).post(createtask);
router.route('/:id').get(getid).patch(updatetask).delete(deletetask);
// router.use('/',gettask);
// router.use('/',createtask);
// router.use('/:id',getid);
// router.use('/:id',updatetask);
// router.use('/:id',deletetask);
module.exports=router;