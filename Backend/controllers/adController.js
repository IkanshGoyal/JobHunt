const Ad = require('../models/Ad');

exports.createAd = async (req, res) => {
  const { company, content, link } = req.body;
  try {
    const ad = new Ad({ company, content, link });
    await ad.save();
    res.status(201).json(ad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other ad-related controller functions here...
