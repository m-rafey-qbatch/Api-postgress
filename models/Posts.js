
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("posts", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "userId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.users, { foreignKey: "userId" });
  };


  Post.associate = (models)=>{
    Post.hasMany(models.comments,{foreignKey:'postId'})
  }

  return Post;
};
