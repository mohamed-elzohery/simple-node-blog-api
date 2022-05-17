const mongoose = require('mongoose');
const {isAlphaNumeric} = require('validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        validate: {
            validator(val){return isAlphaNumeric(val)},
            message: 'username must be alphanumeric.'
        },
        max: [40, 'username cannot exceed 40 letters.'],
        min: [3, 'username cannot be less than 3 letters'],
        trim: true,
    },

    dob:  {
        type: Date,
        required: [true, 'username is required'],
        required: true,
        validate: {
          validator: function (v) {
            return (
              v && // check that there is a date object
              v.getTime() > Date.now() -  16 * 365 * 24 * 60 * 60 * 1000 &&
              v.getTime() < Date.now() - 150 * 365 * 24 * 60 * 60 * 1000
            );
          },
          message:
            "Age is minimum 16 and max of 150",
        }
      },

    isSuspended: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;