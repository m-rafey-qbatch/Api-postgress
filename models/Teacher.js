module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("teachers", {
    teacherId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  Teacher.associate = (models) => {
    Teacher.belongsTo(models.students, {
      through: "studentTeacher",
      uniqueKey: "teacherId",
      foreignKey: "teacherId",
    });
  };

  return Teacher;
};
