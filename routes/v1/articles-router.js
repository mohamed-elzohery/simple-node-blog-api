const { getArticleById,
        listArticles,
        showArticle, 
        listArticleComments,  
        createArticle,
        updateArticle,
        deleteArticle} = require('../../controllers/article-controller');

const {advResults} = require('@elzohery/tickets-common');
const Article = require('../../models/Article');
const ArticlesRouter = require('express').Router();

ArticlesRouter.route('/')
        .post(createArticle)
        .get(advResults(Article), listArticles);

ArticlesRouter.route('/:id')
        .all(getArticleById)
        .get(showArticle)
        .patch(updateArticle)
        .delete(deleteArticle);
        
ArticlesRouter.get('/:id/comments', getArticleById, listArticleComments);

module.exports = ArticlesRouter;