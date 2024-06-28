const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
  const { userId, name, email, website, logo, location, industry, size, description } = req.body;
  try {
    const company = new Company({ userId, name, email, website, logo, location, industry, size, description });
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a company
exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
