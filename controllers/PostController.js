import Post from "../models/Post.js";
import PageController from "./PageController.js";
import post from "../models/Post.js";

const PostController = {}

PostController.getAllPosts = async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
}

PostController.getPost = async (req, res) => {

    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
}

PostController.addPost = async (req, res) => {
    await Post.create(req.body)
    res.redirect('/')
}
PostController.updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    post.title = req.body.title
    post.message = req.body.message
    post.name = req.body.name
    await post.save()
    res.redirect(`/post/${req.params.id}`)
}
PostController.deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
}



export default PostController