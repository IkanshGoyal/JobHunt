const Recruiter = require('../models/Recruiter');

exports.createRecruiter = async (req, res) => {
  const { fullName, profilePicture, company, about, location, position, educationDetails, yearsOfExperience, specializations, linkedInProfile } = req.body;
  try {
    const recruiter = new Recruiter({ fullName, profilePicture, company, about, location, position, educationDetails, yearsOfExperience, specializations, linkedInProfile });
    await recruiter.save();
    res.status(201).json(recruiter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other recruiter-related controller functions here...
