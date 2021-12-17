module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("students", {
    studentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.teachers, { through: 'studentTeacher', uniqueKey: 'studentId', foreignKey:'studentId'});
  };

  return Student;
};
