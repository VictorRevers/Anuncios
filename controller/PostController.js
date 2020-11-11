const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/post', (req, res)=>{
    res.render('post');
});

router.post('/post/savepost', (req, res)=>{
    var title = req.body.title;
    var description = req.body.description;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var password =  req.body.password;
    var price = req.body.price;

    Post.create({
        title: title,
        description: description,
        email: email,
        phone: phone,
        address: address,
        password: password,
        price: price
        
    }).then(()=>{
        res.redirect('/');
    });

});

router.post('/post/delete', (req, res)=>{
    var id = req.body.id;
    var password = req.body.password;

    if(password != undefined){
        Post.destroy({
            where:{
                id: id,
                password: password
            }
        }).then(()=>{
            res.redirect('/');
        })
    }
});


module.exports = router;