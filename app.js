import express from 'express'
import mongoose from 'mongoose'
import ejs from 'ejs'
import methodOverride from 'method-override'

import PostController from "./controllers/PostController.js";
import PageController from "./controllers/PageController.js";


mongoose.set('strictQuery', false)
const app = express()
const port = 3000
const blog = { id: 1, title: "Blog title", description: "Blog description" }
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))

mongoose.connect('mongodb://localhost/cleanblog-test-db')




app.get('/', PostController.getAllPosts)
app.get('/about', PageController.getAboutPage)
app.get('/addPostPage', PageController.getAddPage)
app.get('/post/:id', PostController.getPost)
app.get('/post/edit/:id', PageController.getEditPage)
app.put('/post/:id',PostController.updatePost)
app.delete('/post/:id', PostController.deletePost)
app.post('/addPost', PostController.addPost)







app.listen(port, () => {
    console.log(`sunuc ${port} portunda başlatildi`)
})
