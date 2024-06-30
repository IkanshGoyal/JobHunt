const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    about: { type: String },
    location: { type: String },
    position: { type: String, required: true },
    educationDetails: {
        college: { type: String },
        graduationDate: { type: Date },
    },
    yearsOfExperience: { type: Number, required: true },
    specializations: [String],
    linkedInProfile: { type: String },
    followers: { type: Number, default: 0 },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    analytics: {
        views: { type: Number, default: 0 },
        applicants: { type: Number, default: 0 },
    },
    shareOption: { type: Boolean, default: false },
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;