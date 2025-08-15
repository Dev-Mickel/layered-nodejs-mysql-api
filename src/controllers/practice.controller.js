const practiceService = require('../services/practice.service');

exports.getAllPractices = async (req, res) => {
  try {
    const practices = await practiceService.getAllPractices();
    res.status(200).json(practices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPracticeById = async (req, res) => {
  try {
    const practice = await practiceService.getPracticeById(req.params.id);
    if (!practice) {
      return res.status(404).json({ message: 'Practice not found' });
    }
    res.status(200).json(practice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPractice = async (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const practice = await practiceService.createPractice({ name, description });
    res.status(201).json(practice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePractice = async (req, res) => {
  try {
    const { name, description } = req.body;
    const practice = await practiceService.updatePractice(req.params.id, { name, description });
    
    if (!practice) {
      return res.status(404).json({ message: 'Practice not found' });
    }
    
    res.status(200).json(practice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePractice = async (req, res) => {
  try {
    const deleted = await practiceService.deletePractice(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ message: 'Practice not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};