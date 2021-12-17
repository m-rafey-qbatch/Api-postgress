"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("posts", {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      userId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'userId', 
          allowNull:false
        },
        onDelete: 'CASCADE',
      },
        createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('posts')
  },
};
