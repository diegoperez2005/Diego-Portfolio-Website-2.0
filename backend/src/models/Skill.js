const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Skill extends Model {
    static associate(models) {
      Skill.belongsTo(models.User, { as: 'teacher', foreignKey: 'teacherId' });
      Skill.belongsTo(models.User, { as: 'student', foreignKey: 'studentId' });
    }
  }

  Skill.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    isTeaching: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isLearning: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Skill',
    indexes: [
      {
        fields: ['name']
      },
      {
        fields: ['category']
      },
      {
        fields: ['teacherId']
      },
      {
        fields: ['studentId']
      }
    ]
  });

  return Skill;
}; 