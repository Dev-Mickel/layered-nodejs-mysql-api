const db = require('../models');
const Objective = db.Objective;

exports.getAllObjectives = async () => {
  try {
    return await Objective.findAll({
      include: [{
        model: db.Practice
      }]
    });
  } catch (error) {
    throw error;
  }
};

exports.getObjectiveById = async (id) => {
  try {
    return await Objective.findByPk(id, {
      include: [{
        model: db.Practice
      }]
    });
  } catch (error) {
    throw error;
  }
};

exports.getObjectivesByPracticeId = async (practiceId) => {
  try {
    return await Objective.findAll({
      where: { practice_id: practiceId },
      include: [{
        model: db.Practice
      }]
    });
  } catch (error) {
    throw error;
  }
};

exports.createObjective = async (objectiveData) => {
  try {
    return await Objective.create(objectiveData);
  } catch (error) {
    throw error;
  }
};

exports.updateObjective = async (id, objectiveData) => {
  try {
    const [updatedRowsCount] = await Objective.update(objectiveData, {
      where: { id: id }
    });
    if (updatedRowsCount === 0) {
      return null;
    }
    return await Objective.findByPk(id);
  } catch (error) {
    throw error;
  }
};

exports.deleteObjective = async (id) => {
  try {
    const deletedRowsCount = await Objective.destroy({
      where: { id: id }
    });
    return deletedRowsCount > 0;
  } catch (error) {
    throw error;
  }
};