const UserRouter = require('express').Router();
const {changeSuspendStatus} = require('../../controllers/user-controllers');
UserRouter.post('/:id/suspend', changeSuspendStatus);
module.exports = UserRouter;





