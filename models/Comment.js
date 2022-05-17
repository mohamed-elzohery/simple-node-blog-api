const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'Comment must ne assigned to a user.'],
        ref: 'User'
    },
    content: {
        type: String,
        required: [true, 'content is required'],
        max: [200, 'content cannot exceed 200 letters'],
        min: [20, 'content cannot be less than 20 letters']
    },
    date: {
        type: Date
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Comment must be assigned to a article.'],
        ref: 'Article'
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;