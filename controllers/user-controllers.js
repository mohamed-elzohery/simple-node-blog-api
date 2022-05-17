const User = require('../models/User');
const {catchAsync, ErrorResponse} = require('@elzohery/tickets-common');

const getUserById =  catchAsync( async (req, res, next) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        next(new ErrorResponse(404, 'Comment not found', 'Comment'));
    }
    req.user = user;
    next();
});

const suspendUser = catchAsync( async (req, res, next) => {
    const {user} = req;
    console.log(user);
    const updatedUser = await User.updateOne({_id: user._id}, {isSuspended: true});
    res.status(200).json({success: true, message: 'user is suspended.', data: updatedUser})
});

const unsuspendUser = catchAsync( async (req, res, next) => {
    const {user} = req;
    const updatedUser = await User.updateOne({_id: user._id}, {isSuspended: false});
    res.status(200).json({success: true, message: 'user is unsuspended.', data: updatedUser})
})

exports.getUserById = getUserById;
exports.suspendUser = suspendUser;
exports.unsuspendUser = unsuspendUser;