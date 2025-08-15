const db = require('../models');
const Practice = db.Practice;

exports.getAllPractices = async () => {
  try {
    return await Practice.findAll({
      include: [{
        model: db.Objective
      }]
    });
  } catch (error) {
    throw error;
  }
};

exports.getPracticeById = async (id) => {
  try {
    return await Practice.findByPk(id, {
      include: [{
        model: db.Objective
      }]
    });
  } catch (error) {
    throw error;
  }
};

exports.createPractice = async (practiceData) => {
  try {
    return await Practice.create(practiceData);
  } catch (error) {
    throw error;
  }
};

exports.updatePractice = async (id, practiceData) => {
  try {
    const [updatedRowsCount] = await Practice.update(practiceData, {
      where: { id: id }
    });
    if (updatedRowsCount === 0) {
      return null;
    }
    return await Practice.findByPk(id);
  } catch (error) {
    throw error;
  }
};

exports.deletePractice = async (id) => {
  try {
    const deletedRowsCount = await Practice.destroy({
      where: { id: id }
    });
    return deletedRowsCount > 0;
  } catch (error) {
    throw error;
  }
};