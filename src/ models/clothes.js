'use strict';

const clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        clothesName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        clothesInf: {
            type: DataTypes.STRING,
        },
    });

module.exports = clothes;