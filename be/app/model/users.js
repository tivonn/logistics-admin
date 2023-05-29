/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      account: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "staff", "finance", "user"),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      create_at: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      },
      update_at: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "users",
    }
  );

  Model.associate = function () {};

  return Model;
};