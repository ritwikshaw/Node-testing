const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/', async(req,res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }
    catch{
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const post = new Post({
        title: req.body.title,
        post: req.body.post
    })
    try{
        const a1 = await post.save()
        res.send(a1)
    }
    catch(err){
        res.send(err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        res.json(post)
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const post = await Post.findById(req.params.id) 
        post.post = req.body.post
        const a1 = await post.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id', async(req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        post.delete()
        res.send('200 ok, deleted')
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router

