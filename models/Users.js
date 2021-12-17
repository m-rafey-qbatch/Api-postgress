module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  User.addHook("beforeCreate", (user, options) => {
    console.log(user.userName, "Heloo world!!------");
  });

  User.associate = (models) => {
    User.hasMany(models.posts, {
      foreignKey: "userId",
    });
  };

  return User;
};



