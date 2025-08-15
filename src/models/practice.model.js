module.exports = (sequelize, Sequelize) => {
  const Practice = sequelize.define('Practice', {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
  });

  return Practice;
};