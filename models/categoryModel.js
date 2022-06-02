module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { underscored: "true", freezeTableName: "true" }
  );

  return Category;
};
