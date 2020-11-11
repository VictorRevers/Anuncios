const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const connection = require('./database/database');
const Post = require('./models/Post');

const PostController = require('./controller/PostController');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({  extended: false }));
app.use(bodyParser.json());

app.use('/', PostController);

connection.authenticate().then(()=>{
    console.log('DB conectada!');
}).catch((error)=>{
    console.log(error);
});

app.get('/', (req, res)=>{
    Post.findAll({order: [['id', 'DESC']]}).then( posts =>{
        res.render('index',{
            posts: posts
        });
    });
});

app.listen(3000, ()=>{
    console.log("App rodando!");
});