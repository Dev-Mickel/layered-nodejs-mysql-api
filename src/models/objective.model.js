module.exports = (sequelize, Sequelize) => {
  const Objective = sequelize.define('Objective', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return Objective;
};