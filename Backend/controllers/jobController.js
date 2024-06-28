const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, company, location, industry, description, qualifications, compensation, applyLink } = req.body;
  try {
    const job = new Job({ title, company, location, industry, description, qualifications, compensation, applyLink });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other job-related controller functions here...
