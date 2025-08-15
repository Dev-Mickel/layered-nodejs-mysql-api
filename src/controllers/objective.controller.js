const objectiveService = require('../services/objective.service');

exports.getAllObjectives = async (req, res) => {
  try {
    const objectives = await objectiveService.getAllObjectives();
    res.status(200).json(objectives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getObjectiveById = async (req, res) => {
  try {
    const objective = await objectiveService.getObjectiveById(req.params.id);
    if (!objective) {
      return res.status(404).json({ message: 'Objective not found' });
    }
    res.status(200).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getObjectivesByPracticeId = async (req, res) => {
  try {
    const objectives = await objectiveService.getObjectivesByPracticeId(req.params.practiceId);
    res.status(200).json(objectives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createObjective = async (req, res) => {
  try {
    const { practice_id, description } = req.body;
    
    if (!practice_id || !description) {
      return res.status(400).json({ message: 'Practice ID and description are required' });
    }

    const objective = await objectiveService.createObjective({ practice_id, description });
    res.status(201).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateObjective = async (req, res) => {
  try {
    const { practice_id, description } = req.body;
    const objective = await objectiveService.updateObjective(req.params.id, { practice_id, description });
    
    if (!objective) {
      return res.status(404).json({ message: 'Objective not found' });
    }
    
    res.status(200).json(objective);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteObjective = async (req, res) => {
  try {
    const deleted = await objectiveService.deleteObjective(req.params.id);
    
    if (!deleted) {
      return res.status(404).json({ message: 'Objective not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};