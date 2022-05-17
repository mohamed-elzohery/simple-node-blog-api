const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        max: [200, 'title cannot exceed 200 letters'],
        min: [20, 'title cannot be less than 20 letters']
    },
    body: {
        type: String,
        required: [true, 'Body is required'],
        max: [20000, 'Body cannot exceed 20000 letters'],
        min: [100, 'Body cannot be less than 100 letters']
    },
    date: {
        type: Date
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;