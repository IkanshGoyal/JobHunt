const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: true },
    about: { type: String },
    location: { type: String },
    resume: { type: String, required: true },
    education: [{
      institution: { type: String },
      degree: { type: String },
      fieldOfStudy: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
    }],
    experience: [{
      company: { type: String },
      position: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: { type: String },
    }],
    skills: [String],
    linkedInProfile: { type: String },
    desiredJobTitle: { type: String, required: true },
    followers: { type: Number, default: 0 },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    shareOption: { type: Boolean, default: false },
  });
  
  const Applicant = mongoose.model('Applicant', applicantSchema);
  
  module.exports = Applicant;
  