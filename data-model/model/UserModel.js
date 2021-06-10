module.exports = async (Sequelize, sequelize) => {
  return sequelize.define("users", {
    user_id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4(),
      primaryKey: true,
    },
    full_name: {
      type: Sequelize.DataTypes.STRING(32),
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.DataTypes.STRING(13),
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING(128),
      allowNull: false,
    },
    gender: {
      type: Sequelize.DataTypes.ENUM,
      values: ["male", "female"],
    },
    bdate: {
      type: Sequelize.DataTypes.STRING(256),
      allowNull: false,
    },
    isConfirmed: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.STRING(256),
      allowNull: false,
    },
  });
};
