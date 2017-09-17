module.exports = function (sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });

    return Burger;
};
