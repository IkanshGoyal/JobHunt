const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { title, liveLink, githubLink, technologiesUsed, description } = req.body;
  try {
    const project = new Project({ title, liveLink, githubLink, technologiesUsed, description });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other project-related controller functions here...
