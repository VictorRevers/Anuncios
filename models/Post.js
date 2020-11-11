const Sequelize =  require('sequelize');
const connection = require('../database/database');

const Post = connection.define('post',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    phone:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    address:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    price:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    }
    
});

Post.sync({ force: false }).then(()=>{});

module.exports = Post;