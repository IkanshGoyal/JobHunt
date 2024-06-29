require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const corsOptions = {
  Credential: 'true',
};

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ikanshgoyal:iEJskDLZShRGrm4v@jobhunt.5pbstlz.mongodb.net/?retryWrites=true&w=majority&appName=JobHunt", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json({ extended: false }));
app.options("*" , cors(corsOptions));
app.use(cors(corsOptions));

const companyRoutes = require('./routes/companyRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const applicantRoutes = require('./routes/applicantRoutes');
const jobRoutes = require('./routes/jobRoutes');
const postRoutes = require('./routes/postRoutes');
const adRoutes = require('./routes/adRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/company', companyRoutes);
app.use('/api/recruiter', recruiterRoutes);
app.use('/api/applicant', applicantRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
