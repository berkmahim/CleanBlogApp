import express from 'express'
import mongoose from 'mongoose'
import ejs from 'ejs'
import Post from './models/Post.js'

mongoose.set('strictQuery', false)

const app = express()
const port = 3000
const blog = { id: 1, title: "Blog title", description: "Blog description" }
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


mongoose.connect('mongodb://localhost/cleanblog-test-db')




app.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/addPost', (req, res) => {
    res.render('add_post')
})
app.get('/post', (req, res) => {
    res.render('post')
})

app.post('/addPost', async (req, res) => {
    await Post.create(req.body)
    res.redirect('/')
})







app.listen(port, () => {
    console.log(`sunuc ${port} portunda başlatildi`)
})
