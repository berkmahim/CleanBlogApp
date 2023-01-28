import mongoose, { Schema } from 'mongoose'
mongoose.set('strictQuery', false)

const PostSchema = new Schema({
    title: String,
    message: String,
    name: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', PostSchema)

export default Post