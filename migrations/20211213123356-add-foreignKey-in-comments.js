"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("comments", "postId", {
      type: Sequelize.INTEGER,
      references: {
        model: "posts",
        key: "postId",
      },
      onDelete: "CASCADE",
      allowNull:false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("comments", "postId");
  },
};
