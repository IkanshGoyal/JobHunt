const Applicant = require('../models/Applicant');

exports.createApplicant = async (req, res) => {
  const { fullName, profilePicture, about, location, resume, education, experience, skills, linkedInProfile, desiredJobTitle } = req.body;
  try {
    const applicant = new Applicant({ fullName, profilePicture, about, location, resume, education, experience, skills, linkedInProfile, desiredJobTitle });
    await applicant.save();
    res.status(201).json(applicant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add other applicant-related controller functions here...
