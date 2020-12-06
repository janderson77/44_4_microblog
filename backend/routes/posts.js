const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router.get('/', async function(req, res, next) {
    try{
        const posts = await Post.getAll()
        return res.json({posts})
    }catch(e){
        return next(e)
    }
})

router.post('/posts')

module.exports = router;