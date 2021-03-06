const app = require('./app');
const {connect} = require('mongoose');
const {errorHandler, ErrorResponse} = require('@elzohery/tickets-common');
const UserRouter = require('./routes/v1/users-router');
const ArticlesRouter = require('./routes/v1/articles-router');
const CommentsRouter = require('./routes/v1/comments-router');
const showHateoas = require('./docs/showHateoas');

//  Hateoas for user routes only
app.get('/api/blog/v1', showHateoas);

app.use('/api/blog/v1/users', UserRouter);
app.use('/api/blog/v1/articles', ArticlesRouter);
app.use('/api/blog/v1/comments', CommentsRouter);
app.use('*', () => {throw new ErrorResponse(404, 'Wrong Route', 'routes')});
app.use(errorHandler);

(async ()=>{
    //  Mongo is connected locally if you don't have mongo on your machine
    //  You can use any remote mongo service or npm i mongodb-memory-server
    await connect('mongodb://localhost:27017/blog');
    console.log('Connected to database');
    app.listen(5000, () => console.log('Server is running on port 5000'));
})()


