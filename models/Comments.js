
module.exports = (sequelize, DataTypes) => {
  const Comment=sequelize.define(
    "comments",
    {
      commentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: "posts",
          key: "postId",
          allowNull: false,
        },
        onDelete: "CASCADE",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }
    //   {
    //     defaultScope: {
    //       where: { postId: 2 },
    //     },
    //   }
  );
  // Comment.addScope('firstPost',{where:{postId:1}})


  Comment.associate = (models)=>{
    Comment.belongsTo(models.posts,{foreignKey:'postId'})
  }
  return Comment;
};
