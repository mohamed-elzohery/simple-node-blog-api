const { getCommentById,
    showComment, 
    createComment,
    updateComment,
    deleteComment} = require('../../controllers/comment-controller');

const CommentsRouter = require('express').Router();

CommentsRouter.post('/', createComment)
CommentsRouter.route('/:id')
    .all(getCommentById)
    .get(showComment)
    .patch(updateComment)
    .delete(deleteComment);
    

module.exports = CommentsRouter;