require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const corsOptions = {
  Credential: 'true',
};

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
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


app.use('/api/companies', require('./routes/companyRoutes'));
app.use('/api/recruiters', require('./routes/recruiterRoutes'));
app.use('/api/applicants', require('./routes/applicantRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/ads', require('./routes/adRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));