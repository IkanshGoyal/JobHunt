const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { author, title, description, links } = req.body;
  try {
    const post = new Post({ author, title, description, links });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other post-related controller functions here...
