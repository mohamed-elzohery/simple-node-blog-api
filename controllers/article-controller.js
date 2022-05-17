const Article = require('../models/Article');
const {catchAsync, ErrorResponse} = require('@elzohery/tickets-common');


const getArticleById =  catchAsync( async (req, res, next) => {
    const {id} = req.params;
    const article = await Article.findById(id).populate("comments");
    console.log(article)
    if(!article){
        next(new ErrorResponse(404, 'Article not found', 'article'));
    }
    res.article = article;
    next();
});

const listArticles =  catchAsync( async (req, res, next) => {
    res.status(200).json({success: true, data: res.adjustRes, message: 'articles are fetched'});
});

const showArticle =  catchAsync( async (req, res, next) => {
    res.status(200).json({success: true, data: res.article, message: 'article is fetched'});
});

const listArticleComments =  catchAsync( async (req, res, next) => {
    console.log(res.article)
    const {comments} = res.article;
    res.status(200).json({success: true, data: comments, message: 'article comments are fetched'});
});

const createArticle = catchAsync( async (req, res, next) => {
    const {title, body} = req.body;
    const article = await Article.create({title, body});
    res.status(200).json({success: true, data: article, message: 'new article is created'});
});

const deleteArticle = catchAsync( async (req, res, next) => {
    const deletedArticle = await Article.deleteOne(res.article);
    res.status(200).json({success: true, data: deletedArticle, message: 'article is deleted'});
});

const updateArticle = catchAsync( async (req, res, next) => {
    const {title, body} = req.body;
    const updatedArticle = await Article.updateOne(res.article, {title, body});
    res.status(200).json({success: true, data: updatedArticle, message: 'article is updated'});
});

module.exports = {
    getArticleById,
    showArticle,
    listArticles,
    listArticleComments,
    createArticle,
    deleteArticle, 
    updateArticle
};
