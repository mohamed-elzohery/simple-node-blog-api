const User = require('../models/User');
const {catchAsync, ErrorResponse} = require('@elzohery/tickets-common');


const changeSuspendStatus = catchAsync( async (req, res, next) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        throw new ErrorResponse(404, 'User not found', 'user');
    }
    console.log(user._id);
    const updatedUser = await User.updateOne(user, {isSuspended: !user.isSuspended}, {runValidators: true});
    res.status(200).json({success: true, message: 'user is updated successfully.', data: updatedUser})
})

exports.changeSuspendStatus = changeSuspendStatus;