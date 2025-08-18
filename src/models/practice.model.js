module.exports = (sequelize, DataTypes) => {
  const Practice = sequelize.define('Practice', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });

  Practice.associate = function(models) {
    // Define associations
    Practice.hasMany(models.Objective, {
      foreignKey: 'practice_id',
      onDelete: 'CASCADE'
    });
  };

  return Practice;
};