const Comment = require('../models/Comment');
const {catchAsync, ErrorResponse} = require('@elzohery/tickets-common');
const Article = require('../models/Article');


const getCommentById =  catchAsync( async (req, res, next) => {
    const {id} = req.params;
    const comment = await Comment.findById(id).populate('username article');
    if(!comment){
        next(new ErrorResponse(404, 'Comment not found', 'Comment'));
    }
    res.comment = comment;
    next();
});

const showComment =  catchAsync( async (req, res, next) => {
    res.status(200).json({success: true, data: res.comment, message: 'Comment is fetched'});
});

const createComment = catchAsync( async (req, res, next) => {
    const {username, content, article} = req.body;
    const articleRelated = await Article.findById(article);
    if(!articleRelated) next(new ErrorResponse(404, 'Article not found', 'Article'));
    const comment = await Comment.create({username, content, article});
    articleRelated.comments.push(comment);
    await articleRelated.save();
    res.status(200).json({success: true, data: comment, message: 'new Comment is created'});
});

const deleteComment = catchAsync( async (req, res, next) => {
    const deletedComment = await Comment.deleteOne(res.comment);
    res.status(200).json({success: true, data: deletedComment, message: 'Comment is deleted'});
});

const updateComment = catchAsync( async (req, res, next) => {
    const {username, content, article} = req.body;
    const updatedComment = await Comment.updateOne(res.comment, {username, content, article});
    res.status(200).json({success: true, data: updatedComment, message: 'Comment is updated'});
});

module.exports = {
    getCommentById,
    showComment,
    createComment,
    deleteComment, 
    updateComment
};
