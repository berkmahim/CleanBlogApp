import Post from "../models/Post.js";

const PageController = {}

PageController.getAboutPage = (req, res) => {
    res.render('about')
}

PageController.getAddPage = (req, res) => {
    res.render('add_post')
}

PageController.getEditPage = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('edit',{
        post
    })
}

export default PageController