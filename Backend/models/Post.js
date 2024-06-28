const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: {
        profilePicture: { type: String, required: true },
        name: { type: String, required: true },
    },
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: [String],
    likes: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' },
    }],
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now },
    }],
    shareOption: { type: Boolean, default: false },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
