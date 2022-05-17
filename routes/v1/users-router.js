const UserRouter = require('express').Router();
const {getUserById, suspendUser, unsuspendUser} = require('../../controllers/user-controllers');
UserRouter.all('/:id/*', getUserById)
        .post('/:id/suspend', suspendUser)
        .post('/:id/unsuspend', unsuspendUser)
module.exports = UserRouter;





