module.exports = (sequelize, DataTypes) => {
  const Objective = sequelize.define('Objective', {
    practice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Practice',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });

  Objective.associate = function(models) {
    // Define associations
    Objective.belongsTo(models.Practice, {
      foreignKey: 'practice_id',
      onDelete: 'CASCADE'
    });
  };

  return Objective;
};